# esquadro
This library is a Helper of Protractor Tests.

## Usage 
***
Esquadro is easy to use and is divided into two parts:
* Page
* Select 

To install, execute the command:
```
 npm install esquadro --save-dev
 ```
*** 
### PAGE
First part is the page, where are methods to interact with browser.
See examples how to use:
First, import the module in your PageObject :

```javascript
const page = require('esquadro/page');
```

After import, you can use helpers of page. See bellow this helpers:


* setValue
```javascript
page.setValue(element, value, timeout)
```
This method receive an element, a value to set and a timeout (optional, default is 5000)

* clickOn
```javascript
page.clickOn(element, timeout)
```
The above method receive an element to click and a timeout (optional, default is 5000)

* waitForElementPresenceInDOM
```javascript
page.waitForElementPresenceInDOM(element, timeout)
```
Thie above method wait for element present in DOM and timeout to wait (optional, default is 5000)

* waitForElementNotPresenceInDOM
```javascript
page.waitForElementNotPresenceInDOM(element, timeout)
```
The above method wait until element NOT attached in DOM and receive two parameter, the first is the element and second is a timeout to wait (optional, default is 5000)

* waitForElementToBeClickable
```javascript
page.waitForElementToBeClickable(element, timeout)
```
The above method wait to click on element and receive two parameter, the first is the element to click and second is a timeout to wait (optional, default is 5000)

* waitForElementToBeVisible
```javascript
page.waitForElementToBeVisible(element, timeout)
```
The above method wait to click on element and receive two parameters, the first is the element to click and second is a timeout to wait (optional, default is 5000)

* waitForElementToBeInvisible
```javascript
  page.waitForElementToBeInvisible(element, timeout)
```
The above method wait until the element be invisible and receive two parameters, the first is the element and second is a timeout to wait (optional, default is 5000)

* waitAlterUrl
```javascript
  page.waitAlterUrl(url, timeout)
```
The above method wait until alter the browser url and receive two parameters, the first is the element and second is a timeout to wait (optional, default is 5000)

* waitForCounter
```javascript
  page.waitForCounter(elementArrayFinder, expectedCount)
```
The above method wait drop down list elements load and receive two parameters, the first is the element and second is a timeout to wait (optional, default is 5000)

* swicthDriverToOpenTab

```javascript
  page.swicthDriverToOpenTab(urlNewTab)
```
The above method switch webdriver to new open tab and receive the url this new tab

```javascript
page.returnDriverToMainTab()
```
The above method switch webdriver to main tab.

```javascript
page.scrollPageTo(valuePixels);
```
The above method scroll the page to point of page

```javascript
page.scrollTop();
```
The above method scroll to top of page

```javascript
page.getScreenshot(nomeArquivo, pathScreeShot)
```
The above method take a screenshot and save file into especifcated path

***
### Select
The second part is the helper to interact with select elements and choose options.

How to use:
Firt, import in your PageObject Class the module select:

```javascript
const Select = require('esquadro/select');
```

After import, create instance this module:
```javascript
const selectType = new Select(element);
```
The constructor receives which element to manipulate

This helper has theese methods bellow:

* getOptions()

It's return all options in select element

E.g.:
```javascript
selectType.getOptions().then(function(options){
  options[1].getText().then(function(value){
    console.log(value);
  });
});
```
In this case, it returns text from the first element of the options in a selected element and print this value

* getOptionSelected()

It's return the option selected in the select element

E.g.:
```javascript
  selectType.getOptionSelected().getText().then(function(value) {
    console.log(value);
  });
```
In this case, it returns text from the option selected in select element

* selectByValue

The above method select the option by value of the select element

E.g.:
```javascript
  selectType.selectByValue('fire');
```
In this case, it's select option where your value is equal 'fire'

* selectByVisibleText

The above method select the option by visible text of the select element

E.g.:
```javascript
  selectType.selectByVisibleText('FIRE');
```
In this case, it's select option where your text is equal 'FIRE'

* selectByIndex

The above method select the option by index in list of options of the select element

E.g.:
```javascript
  selectType.selectByIndex(2);
```
In this case, it select option where your index is 2, starting count in 0.