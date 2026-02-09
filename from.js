import webdriver from "selenium-webdriver";
const { By, Builder, Browser } = webdriver;

async function avoidClickElementInteraction(driver, element) {
    const e = await driver.findElement(By.xpath(`${element}`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e);
    await e.click();
}

async function rendomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function testRun() {
    let firstName = "Faisal", lastName = "Ahmad", email = "faisal@gmail.com", mobile = "0177851929", subject = "SQA", currentAddress = "Mirput-10, Dhaka, Bangladesh";
    const arr = ["Sports", "Reading", "Music"];
    const stateCity = ["NCR", "Uttar Pradesh", "Haryana", "Rajasthan"];
    const ncr=["Delhi", "Gurgaon", "Noida"];
    const up=["Agra", "Lucknow", "Merrut"];
    const haryana=["Karnal", "Panipat"];
    const rajasthan=["Jaipur", "Jaiselmer"];

    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://demoqa.com/");
    await driver.manage().window().maximize();
    await driver.sleep(1500);
    await avoidClickElementInteraction(driver, "(//div[@class='card-body'])[2]");
    await driver.sleep(1500);
    await driver.findElement(By.xpath("(//li[@id='item-0'])[2]")).click();
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys(firstName);
    await driver.findElement(By.xpath("//input[@id='lastName']")).sendKeys(lastName);
    await driver.findElement(By.xpath("//input[@id='userEmail']")).sendKeys(email);
    await avoidClickElementInteraction(driver,`//label[text()='Male']`);
    await driver.findElement(By.xpath("//input[@id='userNumber']")).sendKeys(mobile);
    await driver.findElement(By.xpath("//input[@id='dateOfBirthInput']")).click();
    await driver.sleep(1500);

    let randomMonth = await rendomValue(1, 12);// random month pick
    let monthXpath = `(//option[@value])[${randomMonth}]`;
    await driver.findElement(By.xpath(monthXpath)).click();
    await driver.sleep(1000);

    let randomYear = await rendomValue(1900, 2100);// random Year pick
    let yearXpath = `//option[text()='${randomYear}']`;
    await driver.findElement(By.xpath(yearXpath)).click();
    await driver.sleep(1000);

    let randomDay = await rendomValue(1, 28);// random Day pick
    let dayXpath = `//div[text()='${randomDay}']`;
    await driver.findElement(By.xpath(dayXpath)).click();
    await driver.sleep(1500);
    await driver.findElement(By.xpath(`//input[@id = "subjectsInput"]`)).click();
    await driver.findElement(By.xpath(`//input[@id = "subjectsInput"]`)).sendKeys(subject);
    await driver.sleep(1500);

    let randomIndex = await rendomValue(0, arr.length - 1);//random hobby pick from array. 
    let hobby = arr[randomIndex];
    let hobbyXpath = `//label[text()='${hobby}']`;
    await driver.findElement(By.xpath(hobbyXpath)).click();
    await driver.sleep(1500);

    await driver.findElement(By.xpath(`//input[@id = "uploadPicture"]`)).sendKeys("F:\\MY FORMAL\\IMG_2905.JPG");
    await driver.sleep(1500);
    await driver.findElement(By.xpath(`//textarea[@id = "currentAddress"]`)).sendKeys(currentAddress);
    await driver.sleep(1500);

    await avoidClickElementInteraction(driver, `(//div[@class=" css-yk16xz-control"])[1]`);
    await driver.sleep(1500);

    let randomStateIndex = await rendomValue(0, stateCity.length - 1);//random state pick from array.
    let state = stateCity[randomStateIndex];
    let stateXpath = `//div[text()='${state}']`;
    await driver.findElement(By.xpath(stateXpath)).click();
    await driver.sleep(1500);

    await driver.findElement(By.xpath(`//div[@id="city"]`)).click();
    await driver.sleep(1000);

    if(state === "NCR"){

        let randomCityIndex = await rendomValue(0, ncr.length - 1);//random city pick From NCR state.
        let city = ncr[randomCityIndex];
        let cityXpath = `//div[text()='${city}']`;
        await driver.findElement(By.xpath(cityXpath)).click();
        await driver.sleep(1500);

    }else if(state === "Uttar Pradesh"){

        let randomCityIndex = await rendomValue(0, up.length - 1);//random city pick From UP state.
        let city = up[randomCityIndex];
        let cityXpath = `//div[text()='${city}']`;
        await driver.findElement(By.xpath(cityXpath)).click();
        await driver.sleep(1500);

    }else if(state === "Haryana"){

        let randomCityIndex = await rendomValue(0, haryana.length - 1);//random city pick From Haryana state.
        let city = haryana[randomCityIndex];
        let cityXpath = `//div[text()='${city}']`;
        await driver.findElement(By.xpath(cityXpath)).click();
        await driver.sleep(1500);

    }else if(state === "Rajasthan"){

        let randomCityIndex = await rendomValue(0, rajasthan.length - 1);//random city pick From Rajasthan state.
        let city = rajasthan[randomCityIndex];
        let cityXpath = `//div[text()='${city}']`;
        await driver.findElement(By.xpath(cityXpath)).click();
        await driver.sleep(1500);

    }else(console.log("No state selected"));

    await driver.sleep(1500);
    await driver.findElement(By.xpath(`//button[@id="submit"]`)).click();

    await driver.sleep(3000);
    await driver.quit();
}

testRun();