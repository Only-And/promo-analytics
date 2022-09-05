import chrome from 'chrome-aws-lambda';

export default function (req, res) {
    res.json({
        executablePath: chrome.executablePath
    })
}