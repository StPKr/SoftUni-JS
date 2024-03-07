import { chromium } from 'playwright-chromium';
import { expect } from 'chai';

let browser, page; // Declare reusable variables
describe('E2E tests', async function() {
 before(async () => { browser = await chromium.launch(); });
 after(async () => { await browser.close(); });
 beforeEach(async () => { page = await browser.newPage(); });
 afterEach(async () => { await page.close(); });

 it('works', async ()=>{
    expect(1).to.equal(1);
 })
});