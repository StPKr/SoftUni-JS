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
    before(async () => { browser = await chromium.launch({ headless: false, slowMo: 1500 }); });
    // headless false makes the browser visible
    // slowMo: 500 delays so we can visualise what's happening
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('works', async () => {
        await page.goto('http://localhost:5500/example.html');
        // await page.screenshot({ path: 'example.png' });
        const content = await page.textContent('h1');

        expect(content).to.contain('Hello, Playwright!');

        console.log(content)
    });

    it('has a working button', async () => {
        await page.goto('http://localhost:5500/example.html');
        await page.click('text=click me');

        const content = await page.textContent('h1');
        expect(content).to.contain('Code from page.')

        const visible = await page.isVisible('text=code from page');
        expect(visible).to.be.true;

    });

});