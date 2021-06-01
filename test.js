const puppeteer = require('puppeteer');
const logger = require('pino')();

(async () => {
  const browser = await puppeteer.launch({
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
		'--disable-gpu'
    ]
  });
  const browserVersion = await browser.version()
  console.log(`Started ${browserVersion}`)

  const page = await browser.newPage();
  logger.info("Page created");

  await page.goto('https://www.example.com/', {waitUntil: 'networkidle2'});
  logger.info("Page loaded");
  
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
