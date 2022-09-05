export default async function getDados (request, response) {
    console.log(request.query.produto)
    base_URL = window.location.hostname
    const dados = await fetch(`https://promo-analitycs.vercel.app/api/req?produto=` + request.query.produto)
    
    const dadosJson = await dados.json();
    response.setHeader('Cache-Control', 's-max-age=86400, stale-while-revalidate')
    response.send(dadosJson)
}
