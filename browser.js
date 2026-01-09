import webdriver from "selenium-webdriver";
const { By, Builder, Browser } = webdriver;

async function rendomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function testRun() {

    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://demoqa.com/");
    await driver.manage().window().maximize();
    await driver.sleep(1500);
    const el = await driver.findElement(By.xpath(`//h5[text()="Alerts, Frame & Windows"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", el);
    await el.click();
    await driver.sleep(1500);
   
        await driver.findElement(By.xpath(`(//li[@id="item-0"])[3]`)).click();
        await driver.sleep(1500);
        await driver.findElement(By.xpath(`//button[@id="tabButton"]`)).click();
        await driver.sleep(1500);
        let tabs = await driver.getAllWindowHandles();
        await driver.switchTo().window(tabs[1]);
        await driver.sleep(1500);
        await driver.close();//close the new tab
        await driver.sleep(1000);
        await driver.switchTo().window(tabs[0]); // Switch back to original tab
        await driver.sleep(1500);
        await driver.findElement(By.xpath(`//button[@id="windowButton"]`)).click();
        await driver.sleep(1500);
        let handles = await driver.getAllWindowHandles(); // Get updated window handles
        await driver.switchTo().window(handles[1]); // Switch to new window
        await driver.sleep(1500);
        await driver.close(); // Close the new window
        await driver.switchTo().window(handles[0]); // Switch back to original window
        await driver.sleep(1000);
        await driver.findElement(By.xpath(`//button[@id="messageWindowButton"]`)).click();
        await driver.sleep(1500);
        let messageWindowButton = await driver.getAllWindowHandles(); // Get updated window handles
        await driver.switchTo().window(messageWindowButton[1]); // Switch to new window message
        await driver.sleep(1500);
        await driver.close(); // Close the new window message
        await driver.switchTo().window(messageWindowButton[0]); // Switch back to original window message
        await driver.sleep(1000);
       
    await driver.findElement(By.xpath(`(//li[@id="item-1"])[2]`)).click();
    await driver.sleep(1500);
    await driver.findElement(By.xpath(`//button[@id="alertButton"]`)).click();
    await driver.sleep(2500);
    let alert = await driver.switchTo().alert();// Switch to the alert
    await alert.accept();// Accept the alert (click OK)
    await driver.sleep(1000);
    await driver.findElement(By.xpath(`//button[@id="timerAlertButton"]`)).click();

    try {//For Daynamic alert Testing
        let alert = await driver.switchTo().alert();
        await alert.accept();
        console.log("Alert are open before 5 seconds");
    }catch (e){
        console.log("Alert is not open before 5 seconds: ", e.message);
    }
    
    await driver.sleep(6000);
    let alertTimer = await driver.switchTo().alert();
    await driver.sleep(1500);
    await alertTimer.accept();
    await driver.sleep(1000);
    await driver.findElement(By.xpath(`//button[@id="confirmButton"]`)).click();
    await driver.sleep(1500);
    let confirmAlert = await driver.switchTo().alert();
    let confromAlert = await rendomValue(0, 1);

    if(confromAlert === 0){ // Randomly accept or dismiss the confirm alert
        await confirmAlert.accept();
    }else{
        await confirmAlert.dismiss();
    }

    await driver.sleep(1500);
    await driver.findElement(By.xpath(`//button[@id="promtButton"]`)).click();
    await driver.sleep(1500);
    let promptAlert = await driver.switchTo().alert();
    await driver.sleep(1000);
    await promptAlert.sendKeys("Faisal Ahmad ");
    await promptAlert.accept();
    await driver.findElement(By.xpath(`(//li[@id="item-2"])[2]`)).click();
    await driver.sleep(1500);
    await driver.switchTo().frame("frame1");
    let frame1 = await driver.findElement(By.xpath(`//h1[@id="sampleHeading"]`)).getText();
    console.log("Frame 1 Text: ", frame1);
    await driver.switchTo().defaultContent();
    await driver.sleep(1000);
    await driver.switchTo().frame("frame2");
    let frame2 = await driver.findElement(By.xpath(`//h1[@id="sampleHeading"]`)).getText();
    console.log("Frame 2 Text: ", frame2);
    await driver.switchTo().defaultContent();
    await driver.sleep(1000);
 
    const el1 = await driver.findElement(By.xpath(`//span[text()="Nested Frames"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", el1);
    await el1.click();
    await driver.sleep(1500);
    await driver.switchTo().frame("frame1");
    let parentFrame = await driver.findElement(By.xpath(`//body[text()="Parent frame"]`)).getText();
    console.log("Parent Frame Text: ", parentFrame);
    await driver.sleep(1000);
    let childFrame = await driver.findElement(By.tagName("iframe"));
    await driver.switchTo().frame(childFrame);
    let childText = await driver.findElement(By.tagName("p")).getText();
    console.log("Child Frame Text:", childText);
    await driver.switchTo().defaultContent();
    await driver.sleep(1000);
    
    const el2 = await driver.findElement(By.xpath(`(//li[@id="item-4"])[2]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", el2);
    await el2.click();
    await driver.sleep(1500);
    await driver.findElement(By.xpath(`//button[@id="showSmallModal"]`)).click();
    await driver.sleep(1000);
    console.log("Small Modal Text: ",await driver.findElement(By.xpath(`//div[text()="This is a small modal. It has very less content"]`)).getText());
    await driver.findElement(By.xpath(`//button[@id="closeSmallModal"]`)).click();
    await driver.sleep(1500);
    await driver.findElement(By.xpath(`//button[@id="showLargeModal"]`)).click();
    await driver.sleep(1000);
    console.log("Large Modal Text: ", await driver.findElement(By.xpath(`//div[@class="modal-body"]`)).getText());
    await driver.sleep(1500);
    await driver.findElement(By.xpath(`//button[@class="close"]`)).click();
    await driver.sleep(3000);
    await driver.quit();

}

testRun();