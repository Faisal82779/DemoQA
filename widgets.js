import webdriver from "selenium-webdriver";
const { By, Builder, Browser, Key } = webdriver;

async function accordian(driver, label) {
    console.log(`--------------- ${label} Click    ----------------`);
    console.log("Is the first section expands: ", await driver.findElement(By.xpath(`//div[@id="section1Content"]`)).isDisplayed());
    await driver.sleep(500);
    console.log("Is the second section expands: ", await driver.findElement(By.xpath(`//div[@id="section2Content"]`)).isDisplayed());
    await driver.sleep(500);
    console.log("Is the third section expands: ", await driver.findElement(By.xpath(`//div[@id="section3Content"]`)).isDisplayed());
}

async function rendomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Store all previously generated numbers in this array
const usedNumbers = new Set();
async function uniquRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    // If we've used up all possible numbers, reset or throw error
    if (usedNumbers.size >= max - min + 1) {
        usedNumbers.clear(); // Optional: reset to start over
        // or throw new Error("No more unique numbers available");
    }

    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (usedNumbers.has(randomNum)); // keep generating until we get a new one

    usedNumbers.add(randomNum); // remember this number
    return randomNum;
}

async function tabClass(driver, a) {

    console.log(`*********** When ${a} Tab are open*********** `);

    let isActive = (await driver.findElement(By.id("demo-tab-what")).getAttribute("aria-selected")) === "true";
    console.log("Is What tab open?:", isActive);
    let tab1 = await driver.findElement(By.xpath(`(//p[@class="mt-3"])[1]`)).isDisplayed();
    console.log("Is the text of the First tab open: ", tab1);
    await driver.sleep(500);

    let origin = await driver.findElement(By.id("demo-tab-origin")).getAttribute("aria-selected") === "true";
    console.log("Is the Origin tab open? : ", origin);
    let tab2 = await driver.findElement(By.xpath(`(//p[@class="mt-3"])[2]`)).isDisplayed();
    console.log("Is the text of the Second tab open: ", tab2);
    await driver.sleep(500);

    let use = (await driver.findElement(By.xpath(`//a[@id="demo-tab-use"]`)).getAttribute("aria-selected")) === "true";
    console.log("Is the Use tab open? : ", use);
    let tab3 = await driver.findElement(By.xpath(`(//p[@class="mt-3"])[3]`)).isDisplayed();
    console.log("Is the  text of the Third tab open: ", tab3);
}


async function testRun() {
    const aC = ["Blue", "Green", "Indigo", "Purple", "Red", "Voilet", "White", "Yellow",];
    const bC = ["Aqua", "Black", "Magenta"];
    const selectValues = ["Group 1, option 1", "Group 1, option 2", "Group 2, option 1", "Group 2, option 2", "Another root option", "A root option"];
    const selectOnes = ["Dr.", "Mr.", "Mrs.", "Ms.", "Prof.", "Other"];
    const multiSelectColor = ["Green", "Blue", "Black", "Red"];
    const car = ["Volvo", "Saab", "Opel", "Audi"];

    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://demoqa.com/");
    await driver.manage().window().maximize();
    await driver.sleep(1500);
    const el = await driver.findElement(By.xpath(`//h5[text()="Widgets"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", el);
    await el.click();

    //Select Menu
    const e11 = await driver.findElement(By.xpath(`//span[text()="Select Menu"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e11);
    await e11.click();
    const selectOptionBtn = await driver.findElement(By.xpath(`//div[text()="Select Option"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", selectOptionBtn);
    await driver.sleep(1000);
    try {
        await selectOptionBtn.click();
    } catch (e) {
        await driver.executeScript("arguments[0].click();", selectOptionBtn);
    }
    await driver.sleep(1500);
    let selectValue = selectValues[await rendomValue(0, selectValues.length - 1)];
    const selectInput1 = await driver.findElement(By.xpath(`//input[@id="react-select-2-input"]`));
    await driver.sleep(500);
    await selectInput1.sendKeys(selectValue);
    await driver.sleep(1000);
    await selectInput1.sendKeys(Key.ENTER);
    await driver.sleep(1500);
    
    const selectTitleBtn = await driver.findElement(By.xpath(`//div[text()="Select Title"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", selectTitleBtn);
    await driver.sleep(1000);
    try {
        await selectTitleBtn.click();
    } catch (e) {
        await driver.executeScript("arguments[0].click();", selectTitleBtn);
    }
    await driver.sleep(1500);
    let selectOne = selectOnes[await rendomValue(0, selectOnes.length - 1)];
    const selectInput2 = await driver.findElement(By.xpath(`//input[@id="react-select-3-input"]`));
    await driver.sleep(500);
    await selectInput2.sendKeys(selectOne);
    await driver.sleep(1000);
    await selectInput2.sendKeys(Key.ENTER);
    await driver.sleep(1500);
    const oldSelectMenu = await driver.findElement(By.xpath(`//select[@id="oldSelectMenu"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", oldSelectMenu);
    await driver.sleep(1000);
    try {
        await oldSelectMenu.click();
    } catch (e) {
        await driver.executeScript("arguments[0].click();", oldSelectMenu);
    }
    await driver.sleep(2000);
    let colorIndex = await rendomValue(0, 1);
    if (colorIndex === 1) {
        let indexColor = await rendomValue(0, aC.length - 1);
        const e12 = await driver.findElement(By.xpath(`//option[text()="${aC[indexColor]}"]`));
        await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e12);
        await e12.click();
    } else {
        let indexColor = await rendomValue(0, bC.length - 1);
        const e12 = await driver.findElement(By.xpath(`//option[text()="${bC[indexColor]}"]`));
        await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e12);
        await e12.click();
    }
    await driver.sleep(1500);
    
    const multiSelectBtn = await driver.findElement(By.xpath(`//div[text()="Select..."]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", multiSelectBtn);
    await driver.sleep(1000);
    try {
        await multiSelectBtn.click();
    } catch (e) {
        await driver.executeScript("arguments[0].click();", multiSelectBtn);
    }
    await driver.sleep(1500);
    for (let i = 0; i < 4; i++) {
        let coloresName = multiSelectColor[await uniquRandomValue(0, multiSelectColor.length - 1)];
        const selectInput4 = await driver.findElement(By.xpath(`//input[@id="react-select-4-input"]`));
        await selectInput4.sendKeys(coloresName);
        await driver.sleep(1000);
        await selectInput4.sendKeys(Key.ENTER);
        await driver.sleep(1000);
    }
    await driver.sleep(1500);
    
    const carSelectDiv = await driver.findElement(By.xpath(`(//div[@class="css-xb97g8"])[4]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", carSelectDiv);
    await driver.sleep(1000);
    try {
        await carSelectDiv.click();
    } catch (e) {
        await driver.executeScript("arguments[0].click();", carSelectDiv);
    }
    await driver.sleep(1500);
    let selectCar = car[await rendomValue(0, car.length - 1)];
    const e13 = await driver.findElement(By.xpath(`//option[text()="${selectCar}"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e13);
    await e13.click();

//Accordian
    await driver.findElement(By.xpath(`(//li[@id="item-0"])[4]`)).click();
    await driver.sleep(1500);
    await accordian(driver, "Fist Time");
    const el2 = await driver.findElement(By.xpath(`//div[@id="section2Heading"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", el2);
    await el2.click();
    await driver.sleep(1000);
    await accordian(driver, "Second Time");
    await driver.findElement(By.xpath(`//div[@id="section3Heading"]`)).click();
    await driver.sleep(1000);
    await accordian(driver, "Third Time");

//Auto Complete
    await driver.findElement(By.xpath(`//span[text()="Auto Complete"]`)).click();
    await driver.sleep(1500);
    let multiColor = await driver.findElement(By.xpath(`//input[@id="autoCompleteMultipleInput"]`));
    await multiColor.sendKeys("a");
    await driver.sleep(1000);
    await multiColor.clear();
    let sugColor = await rendomValue(0, bC.length - 1);
    await multiColor.sendKeys(bC[sugColor]);
    await multiColor.sendKeys(Key.ENTER);
    await driver.sleep(2500);

    for (let i = 0; i < 5; i++) {
        let suColor = await uniquRandomValue(0, aC.length - 1);
        await multiColor.sendKeys(aC[suColor]);
        await driver.sleep(500);
        await multiColor.sendKeys(Key.ENTER);
        await driver.sleep(500);
    }
    await driver.sleep(1500);
    let removeColorName = await rendomValue(1, 6);
    let removeColor = await driver.findElement(By.xpath(`(//div[@class="css-xb97g8 auto-complete__multi-value__remove"])[${removeColorName}]`));
    await removeColor.click();
    await driver.sleep(1500);
    let rendomSingleColor = await rendomValue(0, aC.length - 1);
    let singleColor = await driver.findElement(By.xpath(`//input[@id="autoCompleteSingleInput"]`));
    await singleColor.sendKeys(aC[rendomSingleColor]);
    await singleColor.sendKeys(Key.ENTER);
    await driver.sleep(1500);

//Data Picker
    const ee3 = await driver.findElement(By.xpath(`(//li[@id="item-2"])[3]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", ee3);
    await ee3.click();
    await driver.sleep(1500);
    await driver.findElement(By.xpath(`//input[@id="datePickerMonthYearInput"]`)).click();
    await driver.sleep(1500);
    let monthRendom = await rendomValue(0, 11);
    await driver.findElement(By.xpath(`//option[@value="${monthRendom}"]`)).click();
    await driver.sleep(2000);
    let yearRendom = await rendomValue(1900, 2100);
    await driver.findElement(By.xpath(`//option[@value= "${yearRendom}"]`)).click();
    await driver.sleep(1000);
    let dateRendom = await rendomValue(1, 28);
    await driver.findElement(By.xpath(`//div[text()="${dateRendom}"]`)).click();
    await driver.sleep(1500);
    const e3 = await driver.findElement(By.xpath(`//input[@id="dateAndTimePickerInput"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e3);
    await e3.click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath(`//span[@class="react-datepicker__month-read-view--down-arrow"]`)).click();
    let dateTimeMonthRandom = await rendomValue(1, 11);
    const e4 = await driver.findElement(By.xpath(`(//div[@class="react-datepicker__month-option"])[${dateTimeMonthRandom}]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e4);
    await e4.click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath(`//span[@class="react-datepicker__year-read-view--down-arrow"]`)).click();
    await driver.sleep(1000);
    let upperOrLower = await rendomValue(0, 1);
    let upperOrLowerClick = await rendomValue(1, 20);
    if (upperOrLower === 0) {
        for (let i = 0; i < upperOrLowerClick; i++) {
            await driver.findElement(By.xpath(`//a[@class="react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"]`)).click();
            await driver.sleep(500);
        }


    } else {
        for (let i = 0; i < upperOrLowerClick; i++) {
            await driver.findElement(By.xpath(`//a[@class="react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"]`)).click();
            await driver.sleep(500);
        }
    }
    let dataTimeYearPicker = await rendomValue(2, 12);
    await driver.findElement(By.xpath(`(//div[@class="react-datepicker__year-option"])[${dataTimeYearPicker}]`)).click();
    await driver.sleep(1500);
    let dataTimeDatePicker = await rendomValue(1, 28);
    const e5 = await driver.findElement(By.xpath(`//div[text()="${dataTimeDatePicker}"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e5);
    await e5.click();
    await driver.sleep(1500);

    let timeItems = await driver.findElements(By.xpath('//li[contains(@class,"react-datepicker__time-list-item")]'));
    let maxIndex = timeItems.length;
    let randomTime = await rendomValue(1, maxIndex);
    await timeItems[randomTime - 1].click();
    await driver.sleep(1500);

    //Slider
    const e6 = await driver.findElement(By.xpath(`//span[text()="Slider"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e6);
    await e6.click();
    await driver.sleep(1000);
    let slider = await driver.findElement(By.xpath(`//input[@type="range"]`));
    const desiredValue = await rendomValue(10, 95); // The value you want to set the slider to
    // Use JavaScript to set the value attribute and trigger 'input' and 'change' events
    await driver.executeScript("arguments[0].value = arguments[1]; arguments[0].dispatchEvent(new Event('input')); arguments[0].dispatchEvent(new Event('change'));", slider, desiredValue);
    await driver.sleep(1500);
    const e7 = await driver.findElement(By.xpath(`(//li[@id="item-4"])[3]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e7);
    await e7.click();
    await driver.sleep(1500);
    let progressbar = await driver.findElement(By.xpath(`//div[@role="progressbar"]`)).getAttribute("aria-valuenow")
    let isZero = progressbar === "0";
    console.log("Is the value is 0% at the first: ", isZero);
    await driver.sleep(1000);
    await driver.findElement(By.xpath(`//button[@id="startStopButton"]`)).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath(`//button[@id="startStopButton"]`)).click();
    await driver.sleep(1000)
    let progressbar1 = await driver.findElement(By.xpath(`//div[@role="progressbar"]`)).getAttribute("aria-valuenow")
    let isZero1 = progressbar1 === "0";
    console.log("After 2 second is progress Value still 0%? : ", isZero1);
    console.log(`The Progress Value is : ${progressbar1}%`);
    await driver.sleep(500);
    await driver.findElement(By.xpath(`//button[@id="startStopButton"]`)).click();
    await driver.sleep(4000);
    await driver.findElement(By.xpath(`//button[@id="startStopButton"]`)).click();
    await driver.sleep(500);
    if (progressbar === progressbar1) {
        console.log("The Progressbar are not Change. So there are a Bug......");
    } else {
        console.log("The Progressbar are Changing Successfully......!!!")
    }
    let resetButtons = await driver.findElements(By.xpath(`//button[@id="resetButton"]`));
    let isResetVisible = resetButtons.length > 0;
    console.log("Is the Reset Button are Visible before 100%: ", isResetVisible);
    await driver.findElement(By.xpath(`//button[@id="startStopButton"]`)).click();
    await driver.sleep(5500);//wait for 100% 
    let progressbar2 = await driver.findElement(By.xpath(`//div[@role="progressbar"]`)).getAttribute("aria-valuenow")
    let isZero2 = progressbar2 === "100";
    console.log(`The Progress Value is 100%: `, isZero2);

    let resetButtons1 = await driver.findElements(By.xpath(`//button[@id="resetButton"]`));
    let isResetVisible1 = resetButtons1.length > 0;

    console.log("Is the Reset Button visible after 100%:", isResetVisible1);

    if (isResetVisible1) {
        let checkResetEnabled = await resetButtons1[0].isEnabled();
        console.log("Reset Button enabled:", checkResetEnabled);
    }
    await driver.findElement(By.xpath(`//button[@id="resetButton"]`)).click();
    await driver.sleep(1500);
    const e8 = await driver.findElement(By.xpath(`//span[text()="Tabs"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e8);
    await e8.click();
    await driver.sleep(1500);
    await tabClass(driver, "First");
    await driver.sleep(1000);
    await driver.findElement(By.xpath(`//a[@id="demo-tab-origin"]`)).click();
    await tabClass(driver, "Second");
    await driver.findElement(By.xpath(`//a[@id="demo-tab-use"]`)).click();
    await tabClass(driver, "Third");

    const e9 = await driver.findElement(By.xpath(`//span[text()="Tool Tips"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e9);
    await e9.click();
    await driver.sleep(1500);
    let buttonHover = await driver.findElement(By.id("toolTipButton"));
    await driver.executeScript(`
          var event = new MouseEvent('mouseover', {
            view: window,
            bubbles: true,
            cancelable: true
          });
          arguments[0].dispatchEvent(event);
        `, buttonHover);

    await driver.sleep(1500);

    let textBoxHover = await driver.findElement(By.id("toolTipTextField"));
    await driver.executeScript(`
          var event = new MouseEvent('mouseover', {
            view: window,
            bubbles: true,
            cancelable: true
          });
          arguments[0].dispatchEvent(event);
        `, textBoxHover);

    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", textBoxHover);
    await textBoxHover.sendKeys("Faisal Ahmad Juba");
    await driver.sleep(1000);

    let contrary = await driver.findElement(By.xpath(`//a[text()="Contrary"]`));
    await driver.executeScript(`
          var event = new MouseEvent('mouseover', {
            view: window,
            bubbles: true,
            cancelable: true
          });
          arguments[0].dispatchEvent(event);
        `, contrary);
    await driver.sleep(1000);
    let date = await driver.findElement(By.xpath(`//a[text()="1.10.32"]`));
    await driver.executeScript(`
          var event = new MouseEvent('mouseover', {
            view: window,
            bubbles: true,
            cancelable: true
          });
          arguments[0].dispatchEvent(event);
        `, date);
    await driver.sleep(1500);

    const e10 = await driver.findElement(By.xpath(`//span[text()="Menu"]`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e10);
    await e10.click();
    await driver.sleep(1500);
    let mainItem1 = await driver.findElement(By.xpath(`//a[text()="Main Item 1"]`));
    await driver.actions({ async: true }).move({ origin: mainItem1 }).perform();
    await driver.sleep(1000);
    let mainItem2 = await driver.findElement(By.xpath(`//a[text()="Main Item 2"]`));
    await driver.actions({ async: true }).move({ origin: mainItem2 }).perform();
    await driver.sleep(1000);
    let subItem1 = await driver.findElement(By.xpath(`(//a[text()="Sub Item"])[1]`));
    await driver.actions({ async: true }).move({ origin: subItem1 }).perform();
    await driver.sleep(1500);
    let subItem2 = await driver.findElement(By.xpath(`(//a[text()="Sub Item"])[2]`));
    await driver.actions({ async: true }).move({ origin: subItem2 }).perform();
    await driver.sleep(1000);
    let subList = await driver.findElement(By.xpath(`//a[text()="SUB SUB LIST »"]`));
    await driver.actions({ async: true }).move({ origin: subList }).perform();
    await driver.sleep(1000);
    let subListItem1 = await driver.findElement(By.xpath(`//a[text()="Sub Sub Item 1"]`));
    await driver.actions({ async: true }).move({ origin: subListItem1 }).perform();
    await driver.sleep(1000);
    let subListItem2 = await driver.findElement(By.xpath(`//a[text()="Sub Sub Item 2"]`));
    await driver.actions({ async: true }).move({ origin: subListItem2 }).perform();
    await driver.sleep(1000);
    let mainItem3 = await driver.findElement(By.xpath(`//a[text()="Main Item 3"]`));
    await driver.actions({ async: true }).move({ origin: mainItem3 }).perform();
   
    await driver.sleep(3000);
    await driver.quit();

}
testRun();