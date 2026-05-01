const puppeteer = require("puppeteer");
// This puppeteer gives access to browser 

(async() => {

    // Creates a Google Chrome Browser
    const browser = await puppeteer.launch({
        headless: false,
        args: ["--window-size=1620, 1080"],
        slowMo: 100,
    })

    // Open new Tab
    const page = await browser.newPage();

    await page.goto("https://namastedev.com")

    await page.setViewport({width: 1620, height: 1080})

    console.log("WebPage Loaded");

    const coursesPageLink = ".px-1.flex.gap-x-2.items-center > li:nth-child(2) > a"
    
    await page.waitForSelector(coursesPageLink);

    console.log("Course Page Loaded");
    
    await page.click(coursesPageLink);

    console.log("Namaste FSD Page Loaded");

    await browser.close();

})();