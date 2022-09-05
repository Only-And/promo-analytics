const puppeteer = require('puppeteer-core')
const chrome =  require('chrome-aws-lambda');

console.log(process.env.AWS_REGION)

export default async function (request, response) {

    const isDev = !process.env.AWS_REGION

    const preparePageForTests = async (page) => {
        const userAgent = 'Mozilla/5.0 (X11; Linux x86_64)' +           
          'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
        await page.setUserAgent(userAgent);
      }   
    
    async function getOptions() {
        let exepath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
        let options = {}
        if(isDev) {
            options = {
                headless: true,
                args: [
                    '--disable-web-security'
                ],
                executablePath: exepath
            }
        } else {
            options = {
                args: chrome.args,
                executablePath: await chrome.executablePath,
                headless: chrome.headless
              }
        }

        return options
    }

    const options = await getOptions()
    const browser = await puppeteer.launch(options)

    const page = await browser.newPage();
    await preparePageForTests(page);
    const formatedPrices = []
    const productDesc = []



    await page.goto('https://www.drogasil.com.br/search?w='+ request.query.produto + '&p=' + request.query.p)
    await page.waitForTimeout(3000)

    const verifyPage = await page.$$eval('h1', Page => Page.map(pg => pg.innerText))
    if (verifyPage[0] !== undefined && verifyPage[0] !== null) {
        return response.json({
            name: 'Nenhum produto foi encontrado',
            price: 'Indefinido'
        })
    }
    await page.waitForSelector('span.price-number')

    const names = await page.$$eval('div.rd-col-8 > div > h2.product-card-name', names => names.map(name => name.innerText));
    names.forEach((item) => {
        productDesc.push(item)
    })
    let priceBox = await page.$$eval('.price-box', priceBoxes => priceBoxes.map(pB => pB.innerText))

    for(let i=0; i < priceBox.length; i++){
        if(priceBox[i].split('\n')[1] === undefined) {
            if(priceBox[i] === "") {
                formatedPrices.push('Sem preço / Fora de estoque')
            } else {
                formatedPrices.push(priceBox[i])
            }

        } else {
            formatedPrices.push(priceBox[i].split('\n')[1])
        }
    }

    const dados = {
        name: productDesc,
        price: formatedPrices
    }

    browser.close()


    response.send(dados)

}
