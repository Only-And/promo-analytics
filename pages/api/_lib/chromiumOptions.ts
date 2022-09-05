import chrome from 'chrome-aws-lambda'

const chromeExecPaths = {
    win64: 'C:\Program Files\Google\Chrome\Application\chrome.exe',
    linux: '/usr/bin/google-chrome',
    darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  }

  const exePath = chromeExecPaths[process.platform]
  
  const Options = {
    args: '--disable-web-security',
    executablePath: '',
    headless: true
  }
