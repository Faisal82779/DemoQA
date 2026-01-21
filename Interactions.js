import webdriver from "selenium-webdriver";
const { By, Builder, Browser } = webdriver;

async function testRun() {
    let name = "Faisal Ahmad", email = "faisal@gmail.com", caddress = "Mirpur, Dhaka, Bangladesh", paddress = "DowlatKhan, Bhola, Barishal";

    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://demoqa.com/");
    await driver.manage().window().maximize();
    await driver.sleep(1500);
    const el = await driver.findElement(By.xpath("(//div[@class='card-body'])[1]"));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", el);
    await el.click();
}
testRun();