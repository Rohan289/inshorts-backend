const puppeteer = require("puppeteer");
async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const element = await page.$(".mob-hide");
    const text = await (await element.getProperty('textContent')).jsonValue();
    console.log("Text is",text);
}
scrapeProduct("https://www.mohfw.gov.in/");