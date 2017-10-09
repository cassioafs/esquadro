'use strict'

const EC = protractor.ExpectedConditions;
const TIME_OUT_DEFAULT = 5000;
const PATH_DEFAULT_SCREENSHOT = './features/screenshots';
class Page{

  setValue(element, value, timeout = TIME_OUT_DEFAULT){
    this.waitForElementToBeVisible(element,timeout);
    element.sendKeys(value);
  }

  clickOn(element, timeout = TIME_OUT_DEFAULT){
    this.waitForElementToBeClickable(element, timeout);
    element.click();
  }

  waitForElementPresenceInDOM(element, timeout = TIME_OUT_DEFAULT){
    browser.wait(EC.presenceOf(element), timeout);
  }

  waitForElementNotPresenceInDOM(element, timeout = TIME_OUT_DEFAULT){
    browser.wait(EC.stalenessOf(element), timeout);
  }

  waitForElementToBeClickable(element, timeout = TIME_OUT_DEFAULT){
    browser.wait(EC.elementToBeClickable(element), timeout);
  }
  waitForElementToBeVisible(element, timeout = TIME_OUT_DEFAULT){
    browser.wait(EC.visibilityOf(element), timeout);
  }

  waitForElementToBeInvisible(element, timeout = TIME_OUT_DEFAULT){
    browser.wait(EC.invisibilityOf(element), timeout);
  }

  waitAlterUrl(url, timeout = TIME_OUT_DEFAULT){
    browser.wait(EC.urlContains(url), timeout);
  }

  waitForCounter(elementArrayFinder, expectedCount) {
    return elementArrayFinder.count().then(function (actualCount) {
      return expectedCount === actualCount
    })
  }

  swicthDriverToOpenTab(urlNewTab){
    browser.getAllWindowHandles().then(function(handles){
        browser.switchTo().window(handles[1]).then(function(){
          this.waitAlterUrl(urlNewTab);
        });
    });
  }

  returnToMainTab(){
    browser.getAllWindowHandles().then(function(handles){
        browser.close();
        browser.switchTo().window(handles[0]);
    });
  }

  scrollPageTo(valuePixels){
    browser.executeScript('window.scrollBy(0,' + valuePixels + ');')
  }
  scrollTop(){
    browser.executeScript('window.scrollTo(0,0);');
  }

  getScreenshot(nomeArquivo, pathScreeShot = PATH_DEFAULT_SCREENSHOT) {
    function writeScreenShot (data, filename) {
      var stream = fs.createWriteStream(filename);
        stream.write(Buffer.from(data, 'base64'));
        stream.end();
      }
      return browser.takeScreenshot().then((png) => {
      writeScreenShot(png, `${pathScreeShot}/${nomeArquivo}.png`);
    });
  }
}
module.exports = Page;