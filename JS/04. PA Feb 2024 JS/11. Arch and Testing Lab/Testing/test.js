import { chromium } from 'playwright-chromium';
import { expect } from 'chai';
// playwright has it's own expect, no need to use mocha and chai

/**
 * @type {import { `playwright-chromium` }.BrowserServer}
 */

let browser
/**
 * @type {import { `playwright-chromium` }.Page}
 *
 */
let page; // Declare reusable variables, the above typisation is not necessary

describe('E2E tests', async function () {
    this.timeout(30000); // w/o this Mocha throws an error due to 2000ms limitation
    before(async () => { browser = await chromium.launch(); });
    // headless false makes the browser visible
    // slowMo: 500 delays so we can visualise what's happening
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('load titles', async () => {
        await page.goto('http://localhost:5500');
        await page.waitForLoadState('networkidle');

        const titles = await page.$$eval('div.head span', (items) => items.map(i => i.textContent));

        expect(titles).to.include('Scalable Vector Graphics')

    });

    it('shows more', async () => {
        await page.goto('http://localhost:5500');
        await page.click('text=More');
        await page.waitForLoadState('networkidle');

        const visible = await page.isVisible('text=Scalable Vector Graphics (SVG) is an Extensible Markup Language (XML)-based vector image format');
        expect(visible).to.be.true;

    });


});