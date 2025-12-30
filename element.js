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

    await driver.sleep(1500);
    await driver.findElement(By.xpath("(//li[@id='item-0'])[1]")).click();
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@placeholder='Full Name']")).sendKeys(name);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@placeholder='name@example.com']")).sendKeys(email);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//textarea[@placeholder='Current Address']")).sendKeys(caddress)
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//textarea[@id='permanentAddress']")).sendKeys(paddress)
    await driver.sleep(1500);
    const submitBtn = await driver.findElement(By.xpath("//button[@id='submit']"));
    await driver.executeScript("arguments[0].click();", submitBtn);

    await driver.sleep(1500);

    await driver.findElement(By.xpath("(//li[@id='item-1'])[1]")).click();
    await driver.sleep(1500);
    const expandTitle = await driver.findElement(By.xpath("//span[@class='rct-title']"));
    await driver.executeScript("arguments[0].click();", expandTitle);
    await driver.sleep(1500);
    const expandAllBtn = await driver.findElement(By.xpath("//button[@aria-label='Expand all']"));
    await driver.executeScript("arguments[0].click();", expandAllBtn);
    await driver.sleep(1500);
    const collapseTitle = await driver.findElement(By.xpath("//span[@class='rct-title']"));
    await driver.executeScript("arguments[0].click();", collapseTitle);
    await driver.sleep(1500);
    const checkbox9 = await driver.findElement(By.xpath("(//span[@class='rct-checkbox'])[9]"));
    await driver.executeScript("arguments[0].click();", checkbox9);
    await driver.sleep(1500);
    const checkbox8 = await driver.findElement(By.xpath("(//span[@class='rct-checkbox'])[8]"));
    await driver.executeScript("arguments[0].click();", checkbox8);
    await driver.sleep(1500);
    const toggleBtn = await driver.findElement(By.xpath("(//button[@aria-label='Toggle'])[5]"));
    await driver.executeScript("arguments[0].click();", toggleBtn);
    await driver.sleep(1500);
    const collapseAllBtn = await driver.findElement(By.xpath("//button[@aria-label='Collapse all']"));
    await driver.executeScript("arguments[0].click();", collapseAllBtn);

    await driver.sleep(1500);

    const radioBtn = await driver.findElement(By.xpath("//span[text()='Radio Button']"));
    await driver.executeScript("arguments[0].click();", radioBtn);
    await driver.sleep(1500);
    const yesRadio = await driver.findElement(By.xpath("//label[@for='yesRadio']"));
    await driver.executeScript("arguments[0].click();", yesRadio);
    await driver.sleep(1500);
    const impressiveRadio = await driver.findElement(By.xpath("//label[@for='impressiveRadio']"));
    await driver.executeScript("arguments[0].click();", impressiveRadio);
    await driver.sleep(1500);
    const noRadio = await driver.findElement(By.xpath("//label[@for='noRadio']"));
    await driver.executeScript("arguments[0].click();", noRadio);

    await driver.sleep(1500);

    let fristName = "Faisal", LastName = "Ahmad", age = "26", salary = "30000", department = "SQA Lead";
    const webTablesBtn = await driver.findElement(By.xpath("//span[text()='Web Tables']"));
    await driver.executeScript("arguments[0].click();", webTablesBtn);
    await driver.sleep(1500);
    const searchInput = await driver.findElement(By.xpath("//input[@placeholder = 'Type to search']"));
    await driver.executeScript("arguments[0].click();", searchInput);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@placeholder = 'Type to search']")).sendKeys("Alden");
    await driver.sleep(1500);
    const editBtn = await driver.findElement(By.xpath("//span[@class='mr-2']"));
    await driver.executeScript("arguments[0].click();", editBtn);
    await driver.sleep(1500);
    const firstNameInput = await driver.findElement(By.xpath("//input[@id='firstName']"));
    await driver.executeScript("arguments[0].click();", firstNameInput);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='firstName']")).clear();
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys("Ahmad");
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='lastName']")).clear();
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='lastName']")).sendKeys("Juba");
    await driver.sleep(1500);
    let a = await driver.findElement(By.xpath("//input[@id='userEmail']"));
    await a.clear();
    await a.sendKeys("juba@gmail.com");
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='age']")).clear();
    await driver.findElement(By.xpath("//input[@id='age']")).sendKeys("25");
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='salary']")).clear();
    await driver.findElement(By.xpath("//input[@id='salary']")).sendKeys("20000");
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='department']")).clear();
    await driver.findElement(By.xpath("//input[@id='department']")).sendKeys("Lead SQA");
    await driver.sleep(1500);
    const submitEditBtn = await driver.findElement(By.xpath("//button[text()='Submit']"));
    await driver.executeScript("arguments[0].click();", submitEditBtn);
    await driver.sleep(1500);
    const searchInput2 = await driver.findElement(By.xpath("//input[@placeholder = 'Type to search']"));
    await driver.executeScript("arguments[0].click();", searchInput2);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@placeholder = 'Type to search']")).clear();
    await driver.findElement(By.xpath("//input[@placeholder = 'Type to search']")).sendKeys("juba");
    await driver.sleep(1500);
    const addNewBtn = await driver.findElement(By.xpath("//button[@id='addNewRecordButton']"));
    await driver.executeScript("arguments[0].click();", addNewBtn);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys(fristName);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='lastName']")).sendKeys(LastName);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='userEmail']")).sendKeys(email);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='age']")).sendKeys(age);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='salary']")).sendKeys(salary);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='department']")).sendKeys(department);
    await driver.sleep(1500);
    const submitAddBtn = await driver.findElement(By.xpath("//button[text()='Submit']"));
    await driver.executeScript("arguments[0].click();", submitAddBtn);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@placeholder = 'Type to search']")).clear();
    await driver.findElement(By.xpath("//input[@placeholder = 'Type to search']")).sendKeys("Legal");
    await driver.sleep(1500);
    const deleteBtn = await driver.findElement(By.xpath("//span[@id='delete-record-3']"));
    await driver.executeScript("arguments[0].click();", deleteBtn);

    await driver.sleep(1500);

    const buttonsBtn = await driver.findElement(By.xpath("//span[text()='Buttons']"));
    await driver.executeScript("arguments[0].click();", buttonsBtn);
    await driver.sleep(1500);
    const actions = driver.actions({ async: true });
    const doubleClick = await driver.findElement(By.xpath("//button[@id='doubleClickBtn']"));
    await actions.doubleClick(doubleClick).perform();
    await driver.sleep(1500);
    const rightClickBtn = await driver.findElement(By.xpath("//button[@id='rightClickBtn']"));
    await actions.contextClick(rightClickBtn).perform();
    await driver.sleep(1500);
    const clickMeBtn = await driver.findElement(By.xpath("//button[text()='Click Me']"));
    await driver.executeScript("arguments[0].click();", clickMeBtn);

    await driver.sleep(1500);

    const linksBtn = await driver.findElement(By.xpath("//span[text()='Links']"));
    await driver.executeScript("arguments[0].click();", linksBtn);
    await driver.sleep(1500);
    const homeLink1 = await driver.findElement(By.xpath("(//a[text()='Home'])[1]"));
    await driver.executeScript("arguments[0].click();", homeLink1);
    await driver.sleep(1500);
    let tabs = await driver.getAllWindowHandles();
    await driver.switchTo().window(tabs[1]);// i switched to new tab
    await driver.sleep(1500);
    await driver.switchTo().window(tabs[0]);// i switched back to old tab
    await driver.sleep(1500);
    const homeLink2 = await driver.findElement(By.xpath("(//a[text()='Home'])[2]"));
    await driver.executeScript("arguments[0].click();", homeLink2);
    await driver.sleep(1500);
    await driver.switchTo().window(tabs[1]);// switch to new tab
    await driver.close();//Close current tab that is created.
    await driver.switchTo().window(tabs[0])//i switched back to old tab
    await driver.sleep(1500);
    const createdLink = await driver.findElement(By.xpath("//a[@id='created']"));
    await driver.executeScript("arguments[0].click();", createdLink);
    await driver.sleep(1500);
    const noContentLink = await driver.findElement(By.xpath("//a[@id='no-content']"));
    await driver.executeScript("arguments[0].click();", noContentLink);
    await driver.sleep(1500);
    const movedLink = await driver.findElement(By.xpath("//a[@id='moved']"));
    await driver.executeScript("arguments[0].click();", movedLink);
    await driver.sleep(1500);
    const badRequestLink = await driver.findElement(By.xpath("//a[@id='bad-request']"));
    await driver.executeScript("arguments[0].click();", badRequestLink);
    await driver.sleep(1500);
    const unauthorizedLink = await driver.findElement(By.xpath("//a[@id='unauthorized']"));
    await driver.executeScript("arguments[0].click();", unauthorizedLink);
    await driver.sleep(1500);
    const forbiddenLink = await driver.findElement(By.xpath("//a[@id='forbidden']"));
    await driver.executeScript("arguments[0].click();", forbiddenLink);
    await driver.sleep(1500);
    const invalidUrlLink = await driver.findElement(By.xpath("//a[@id='invalid-url']"));
    await driver.executeScript("arguments[0].click();", invalidUrlLink);

    await driver.sleep(1500);
 
    const brokenLinksBtn = await driver.findElement(By.xpath("//span[text()='Broken Links - Images']"));
    await driver.executeScript("arguments[0].click();", brokenLinksBtn);
    await driver.sleep(1500);
    const validLink = await driver.findElement(By.xpath("//a[text()='Click Here for Valid Link']"));
    await driver.executeScript("arguments[0].click();", validLink);
    await driver.sleep(1500);
    await driver.navigate().back();
    const brokenLink = await driver.findElement(By.xpath("//a[text()='Click Here for Broken Link']"));
    await driver.executeScript("arguments[0].click();", brokenLink);
    await driver.sleep(2500);
    await driver.navigate().back();

    await driver.sleep(1500);
    const uploadDownloadBtn = await driver.findElement(By.xpath("//span[text()='Upload and Download']"));
    await driver.executeScript("arguments[0].click();", uploadDownloadBtn);
    await driver.sleep(1500);
    const downloadLink = await driver.findElement(By.xpath("//a[text()='Download']"));
    await driver.executeScript("arguments[0].click();", downloadLink);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='uploadFile']")).sendKeys("F:\\MY FORMAL\\IMG_2905.JPG");

    await driver.sleep(1500);

    const dynamicPropsBtn = await driver.findElement(By.xpath("//span[text()='Dynamic Properties']"));
    await driver.executeScript("arguments[0].click();", dynamicPropsBtn);
    await driver.sleep(1500);
    let btn = await driver.findElement(By.xpath("//button[text()='Will enable 5 seconds']"));// for Dynamic button or property
    console.log("Button enable: ", await btn.isEnabled());
    let clr = await driver.findElement(By.xpath("//button[text()='Color Change']"));//for color change
    console.log("Color: ", await clr.getCssValue("color"));
    await driver.sleep(7000);
    console.log("Button enable after 5s: ", await btn.isEnabled());
    console.log("Color after 5s: ", await clr.getCssValue("color"));
    let vbtn = await driver.findElement(By.xpath("//button[text()='Visible After 5 Seconds']"));// for visible button
    console.log("Visible Button found after 5s: ", await vbtn.isEnabled());
    let pId = await driver.findElement(By.xpath("//p[text()='This text has random Id']"));// This text has random Id
    let bId = await pId.getAttribute("id");
    await driver.executeScript("location.reload();");
    let pID = await driver.findElement(By.xpath("//p[text()='This text has random Id']"));
    let aId = await pID.getAttribute("id");
    console.log("ID before reload: ", bId, " | ID after reload: ", aId);
    await driver.sleep(3000);
    await driver.quit();
}

testRun();