import * as puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  page.setDefaultNavigationTimeout(1000);

  console.log('open index page');
  await Promise.all([
    page.goto("http://localhost:8989/index.html"),
    page.waitForNavigation({waitUntil: 'domcontentloaded'})
  ]);

  console.log('click on link');
  await Promise.all([
    page.click('#link'),
    page.waitForNavigation({waitUntil: 'domcontentloaded'})
  ]);

  await browser.close();
}

run();
