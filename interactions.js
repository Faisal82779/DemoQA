import webdriver from "selenium-webdriver";
const { By, Builder, Browser } = webdriver;

async function dragAndDrop(driver, sourceElement, targerElement) {
    let actions = driver.actions({ async: true });
    await actions.dragAndDrop(sourceElement, targerElement).perform();// drag One position to another position
    await driver.sleep(1000);
}

async function rendomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function avoidClickElementInteraction(driver, element) {
    const e = await driver.findElement(By.xpath(`${element}`));
    await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", e);
    await e.click();
}

async function resize(driver, element, x, y) {
    let handle = await driver.findElement(By.xpath(`${element}`));
    const actions = driver.actions({ async: true });
    await actions
        .move({ origin: handle })
        .press()
        .move({ x: x, y: y })
        .release()
        .perform();
}
async function drag(driver, sourceElement, targerElement) {
    let source = await driver.findElement(By.xpath(sourceElement));
    let target = await driver.findElement(By.xpath(targerElement));
    await driver.actions({ bridge: true })
        .dragAndDrop(source, target)
        .perform();
}
async function onlyDrag(driver, element, x, y) {
    const dragBox = await driver.findElement(By.xpath(`${element}`));
    const actions = driver.actions({ async: true });
    await actions
        .move({ origin: dragBox })
        .press()
        .move({ x: x, y: y })
        .release()
        .perform();
}
async function dragInsideContainer(driver, elementXpath, x, y) {
    const box = await driver.findElement(By.xpath(`${elementXpath}`));

    await driver.executeScript(`
  arguments[0].dispatchEvent(new MouseEvent('mousedown', { bubbles:true }));
  document.dispatchEvent(new MouseEvent('mousemove', { bubbles:true, clientX:200, clientY:200 }));
  document.dispatchEvent(new MouseEvent('mouseup', { bubbles:true }));
`, box);

}
async function cursorStatus(driver, element) {
    let dragBox= await driver.findElement(By.xpath(`${element}`));
    const cursor = await driver.executeScript(
        "return window.getComputedStyle(arguments[0]).cursor;",
        dragBox
    );
    console.log("Cursor style:", cursor);
}
async function testRun() {

    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://demoqa.com/");
    await driver.manage().window().maximize();
    await driver.sleep(1500);
    await avoidClickElementInteraction(driver, `//h5[text()="Interactions"]`);
    await driver.sleep(1500);

    //Sortable Interaction
   
    await driver.findElement(By.xpath(`//span[text()="Sortable"]`)).click();
    await driver.sleep(1000);

    //List
    let item1 = await driver.findElement(By.xpath("//div[text()='One']"));
    let item6 = await driver.findElement(By.xpath("//div[text()='Six']"));
    await dragAndDrop(driver, item1, item6);// drag One position to Six position
    let item5 = await driver.findElement(By.xpath("//div[text()='Five']"));
    let item2 = await driver.findElement(By.xpath("//div[text()='Two']"));
    await dragAndDrop(driver, item5, item2);// drag Five to Two position

    //Grid
    await driver.sleep(1500);
    await driver.findElement(By.id("demo-tab-grid")).click();
    const gridPanel = await driver.findElement(By.id("demo-tabpane-grid"));// wait for grid panel
    await driver.wait(webdriver.until.elementIsVisible(gridPanel),5000);
    let item9Grid = await driver.findElement(By.xpath(`//div[@id="demo-tabpane-grid"]//div[text()="Nine"]`));    // always scope inside grid panel
    let item2Grid = await driver.findElement(By.xpath(`//div[@id="demo-tabpane-grid"]//div[text()="Two"]`));
    await dragAndDrop(driver, item9Grid, item2Grid);
    let item4Grid = await driver.findElement(By.xpath(`//div[@id="demo-tabpane-grid"]//div[text()="Four"]`));
    let item7Grid = await driver.findElement(By.xpath(`//div[@id="demo-tabpane-grid"]//div[text()="Seven"]`));
    await dragAndDrop(driver, item4Grid, item7Grid);

    //Selectable Interaction
    await driver.sleep(1500);
    await avoidClickElementInteraction(driver, `//span[text()="Selectable"]`);
    await driver.sleep(1000);

    //List
    let item = await driver.findElement(By.xpath(`(//li[contains(@class,'list-group-item')])[1]`));
    let isActive =(await item.getAttribute("class")).includes("active");
    console.log("Before click the list ", isActive); 
    await avoidClickElementInteraction(driver, `(//li[contains(@class,'list-group-item')])[1]`);
    let isActive1 =(await item.getAttribute("class")).includes("active");
    console.log("After click the list ", isActive1); 
    for (let i = 2; i <= 4; i++) {
        await avoidClickElementInteraction(driver, `(//li[contains(@class,'list-group-item')])[${i}]`);
        await driver.sleep(800);
    }
    await driver.sleep(500);
    await avoidClickElementInteraction(driver, `(//li[contains(@class,'list-group-item')])[3]`);

    // Grid
    await driver.sleep(1000);
    await driver.findElement(By.xpath(`//a[@id="demo-tab-grid"]`)).click();
    let item3= await driver.findElement(By.xpath(`//li[text()="One"]`));
    let isActiveGrid =(await item3.getAttribute("class")).includes("active");
    console.log("Before click the grid", isActiveGrid);
    await avoidClickElementInteraction(driver,`//li[text()="One"]`);
    let item4= await driver.findElement(By.xpath(`//li[text()="One"]`));
    let isActiveGrid1 =(await item4.getAttribute("class")).includes("active");
    console.log("After click the grid ", isActiveGrid1);
    for(let i=6;i<=13;i++){
        await avoidClickElementInteraction(driver,`(//li[contains(@class,'list-group-item')])[${i}]`);
        await driver.sleep(500);
    }
    await driver.sleep(700);
    let randomValue = await rendomValue(5,13);
    await avoidClickElementInteraction(driver, `(//li[contains(@class,'list-group-item')])[${randomValue}]`);
    //Resizable
    await driver.sleep(1500);
    await avoidClickElementInteraction(driver, `//span[text()="Resizable"]`);
    await driver.sleep(1200);
    console.log("Try to resize the box , Where hight is : 500 and width is : 300");
    await resize(driver, `(//span[@class="react-resizable-handle react-resizable-handle-se"])[1]`, 800, 400);

    
    //Droppable
    await driver.sleep(1500);
    await avoidClickElementInteraction(driver, `(//li[@id="item-3"])[4]`);
    await driver.sleep(1000);
    //simple
    let beforeDrop =(await driver.findElement(By.xpath(`(//div[@id="droppable"])[1]//p`)).getText()) === "Dropped!";
    console.log("Is the drag box are dropped in the case of simple: ", beforeDrop);
    await drag(driver, `//div[@id="draggable"]`, `//div[@id="droppable"]`);
    let afterDrop =(await driver.findElement(By.xpath(`(//div[@id="droppable"])[1]//p`)).getText()) === "Dropped!";
    console.log("Is the drag box are dropped after action is the case of simple: ", afterDrop);
    await driver.sleep(1000);
    //Accept
    await avoidClickElementInteraction(driver,`//a[@id="droppableExample-tab-accept"]`);
    await driver.sleep(1000);
    await drag(driver, `//div[@id="notAcceptable"]`,`(//div[@id="droppable"])[2]`);
    await driver.sleep(1000);
    let notAcceptable =(await driver.findElement(By.xpath(`(//div[@id="droppable"])[2]//p`)).getText()) === "Dropped!";
    console.log("Is Not Acceptable box accepted in the case of Accept: ", notAcceptable);
    await drag(driver, `//div[@id="acceptable"]`,`(//div[@id="droppable"])[2]`);
    await driver.sleep(1000);
    let acceptable =(await driver.findElement(By.xpath(`(//div[@id="droppable"])[2]//p`)).getText()) === "Dropped!";
    console.log("Is Acceptable box accepted in the case of Accept: ", acceptable);
    await driver.sleep(1000);
    //prevent Propogation
    await avoidClickElementInteraction(driver, `//a[@id="droppableExample-tab-preventPropogation"]`);
    await driver.sleep(1000);
    await drag(driver, `//div[@id="dragBox"]`,`//div[@id="notGreedyInnerDropBox"]//p`);
    await driver.sleep(500);
    let outerDropBox = (await driver.findElement(By.xpath(`(//div[@id="notGreedyDropBox"]//p)[1]`)).getText()) === "Dropped!";
    console.log("Is the outer drop box accepted although Drop Box are Dropped in the inner box in the case of Prevent Propogation: ", outerDropBox);
    await driver.sleep(1000);
    await drag(driver, `//div[@id="dragBox"]`,`//div[@id="greedyDropBoxInner"]`);
    await driver.sleep(500);
    let outerDrop = (await driver.findElement(By.xpath(`(//div[@id="greedyDropBox"]//p)[1]`)).getText()) === "Dropped!";
    console.log("Is the outer drop box accepted although Drop Box are Dropped in the inner box in the case of Prevent Propogation: ", outerDrop);
    await driver.sleep(1500);
    //Revert Draggable
    await avoidClickElementInteraction(driver, `//a[@id="droppableExample-tab-revertable"]`);
    await driver.sleep(1000);
    await drag(driver, `//div[@id="revertable"]`,`(//div[@id="droppable"])[3]`);
    await driver.sleep(2000);
    await drag(driver, `//div[@id="notRevertable"]`,`(//div[@id="droppable"])[3]`);
    await driver.sleep(1500);

    //Draggable
    await avoidClickElementInteraction(driver, `(//li[@id="item-4"])[4]`);
    await driver.sleep(1000);
    //simple
    await onlyDrag(driver, `//div[@id="dragBox"]`, 800, 400);
    
    //Axis Restriction
    await driver.sleep(1000);
    await avoidClickElementInteraction(driver, `//a[@id="draggableExample-tab-axisRestriction"]`);
    await driver.sleep(1000);
    await onlyDrag(driver, `//div[@id="restrictedX"]`, 450, 0); // X axis
    await driver.sleep(1000);
    await onlyDrag(driver, `//div[@id="restrictedY"]`, 0, 600); // Y axis
    await driver.sleep(1500);
    //Container Restriction
    await avoidClickElementInteraction(driver, `//a[@id="draggableExample-tab-containerRestriction"]`);
    await driver.sleep(1000);
    await dragInsideContainer(driver, `//div[text()="I'm contained within the box"]`, 700, 300);
    await driver.sleep(1000);
    await dragInsideContainer(driver,`//span[text()="I'm contained within my parent"]`, 700, 300);
    await driver.sleep(1500);
    //Cursor Style
    await avoidClickElementInteraction(driver, `//a[@id="draggableExample-tab-cursorStyle"]`);
    await driver.sleep(1000);
    await cursorStatus(driver, `//div[@id="cursorCenter"]`);
    await onlyDrag(driver, `//div[@id="cursorCenter"]`, 650, 350);
    await driver.sleep(1000);
    await cursorStatus(driver, `//div[@id="cursorTopLeft"]`);
    await onlyDrag(driver, `//div[@id="cursorTopLeft"]`, 700, 400);
    await driver.sleep(1000);
    await cursorStatus(driver, `//div[@id="cursorBottom"]`);
    await onlyDrag(driver, `//div[@id="cursorBottom"]`, 750, 450);
    await driver.sleep(3000);
    await driver.quit();
}
testRun();

