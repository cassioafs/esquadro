'use strict'

const EC = protractor.ExpectedConditions;
const TIME_OUT_DEFAULT = 5000;
const PATH_DEFAULT_SCREENSHOT = './features/screenshots';

  exports.setValue = (element, value, timeout = TIME_OUT_DEFAULT)=> {
    this.waitForElementToBeVisible(element,timeout);
    element.sendKeys(value);
  }

  exports.clickOn = (element, timeout = TIME_OUT_DEFAULT)=> {
    this.waitForElementToBeClickable(element, timeout);
    element.click();
  }

  exports.waitForElementPresenceInDOM = (element, timeout = TIME_OUT_DEFAULT)=> {
    browser.wait(EC.presenceOf(element), timeout);
  }

  exports.waitForElementNotPresenceInDOM = (element, timeout = TIME_OUT_DEFAULT)=> {
    browser.wait(EC.stalenessOf(element), timeout);
  }

  exports.waitForElementToBeClickable = (element, timeout = TIME_OUT_DEFAULT)=> {
    browser.wait(EC.elementToBeClickable(element), timeout);
  }
  exports.waitForElementToBeVisible = (element, timeout = TIME_OUT_DEFAULT)=> {
    browser.wait(EC.visibilityOf(element), timeout);
  }

  exports.waitForElementToBeInvisible = (element, timeout = TIME_OUT_DEFAULT)=> {
    browser.wait(EC.invisibilityOf(element), timeout);
  }

  exports.waitAlterUrl = (url, timeout = TIME_OUT_DEFAULT)=> {
    browser.wait(EC.urlContains(url), timeout);
  }

  exports.switchDriverToOpenTab = (urlNewTab)=> {
    browser.getAllWindowHandles().then(function(handles){
        browser.switchTo().window(handles[1]).then(function(){
          this.waitAlterUrl(urlNewTab);
        });
    });
  }

  exports.returnDriverToMainTab = ()=> {
    browser.getAllWindowHandles().then(function(handles){
        browser.close();
        browser.switchTo().window(handles[0]);
    });
  }

  exports.scrollPageTo = (valuePixels)=> {
    browser.executeScript(`window.scrollBy(0, ${valuePixels});`)
  }
  exports.scrollTop = ()=> {
    browser.executeScript('window.scrollTo(0,0);');
  }

  exports.getScreenshot = (nomeArquivo, pathScreenShot = PATH_DEFAULT_SCREENSHOT)=> {
    function writeScreenShot (data, filename) {
      var stream = fs.createWriteStream(filename);
        stream.write(Buffer.from(data, 'base64'));
        stream.end();
      }
      return browser.takeScreenshot().then((png) => {
      writeScreenShot(png, `${pathScreenShot}/${nomeArquivo}.png`);
    });
  }