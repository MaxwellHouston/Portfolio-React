import puppeteer from "puppeteer";

describe('Root components load correctly', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  })

  describe('Nav component loads', () => {

    it('Loads logo', async () => {
      await page.goto('http://localhost:3000/', {waitUntil: 'networkidle2'});
      const logo = await page.$('#logo');
      expect(logo).not.toBeNull();
    });

    it('Loads nav list', async () => {
      await page.goto('http://localhost:3000/', {waitUntil: 'networkidle2'});
      const navList = await page.$('.nav-list');
      expect(navList).not.toBeNull();
    })
  

  })
  
  afterAll(() => {
    browser.close();
  })



})