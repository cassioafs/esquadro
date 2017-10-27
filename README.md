# Esquadro
This library is a Helper for Protractor Tests.

## Usage 
***
Esquadro is easy to use and is divided in two parts:
* Page
* Select 

To install, execute the command:
```
 npm install esquadro --save-dev
 ```
*** 
### PAGE
First part is the page, where methods to interact with browser are.
See examples of how to use:
First, import the module into your PageObject :

```javascript
const page = require('esquadro/page');
```

After import, you can use page helpers. See this helpers bellow:


* setValue
```javascript
page.setValue(element, value, timeout)
```
This method receives an element, a value to set and a timeout (optional, default is 5000)

* clickOn
```javascript
page.clickOn(element, timeout)
```
The above method receives an element to click and a timeout (optional, default is 5000)

* waitForElementPresenceInDOM
```javascript
page.waitForElementPresenceInDOM(element, timeout)
```
The method above waits for an element to be present in them DOM and a timeout to wait (optional, default is 5000)

* waitForElementNotPresenceInDOM
```javascript
page.waitForElementNotPresenceInDOM(element, timeout)
```
The above method waits until element is NOT attached in them DOM and receives two parameters, the first is the element and second is a timeout to wait (optional, default is 5000)

* waitForElementToBeClickable
```javascript
page.waitForElementToBeClickable(element, timeout)
```
The above method waits for an element to click on and receives two parameters, the first is the element to click and second is a timeout to wait (optional, default is 5000)

* waitForElementToBeVisible
```javascript
page.waitForElementToBeVisible(element, timeout)
```
The above method waits for an element to be visible on and receives two parameters, the first is the element to click and second is a timeout to wait (optional, default is 5000)

* waitForElementToBeInvisible
```javascript
  page.waitForElementToBeInvisible(element, timeout)
```
The above method waits until the element is invisible and receives two parameters, the first is the element and second is a timeout to wait (optional, default is 5000)

* waitAlterUrl
```javascript
  page.waitAlterUrl(url, timeout)
```
The above method waits until the browser url is altered and receives two parameters, the first is the url and second is a timeout to wait (optional, default is 5000)

* swicthDriverToOpenTab

```javascript
  page.switchDriverToOpenTab(urlNewTab)
```
The above method switches webdriver to a new opened tab and receives the url for this new tab

```javascript
page.returnDriverToMainTab()
```
The above method switches webdriver to then main tab

```javascript
page.scrollPageTo(valuePixels)
```
The above method scrolls the page to a specified position

```javascript
page.scrollTop()
```
The above method scrolls the page to the top

```javascript
page.getScreenshot(nomeArquivo, pathScreenShot)
```
The above method takes a screenshot and save the file into a specified path

***
### Select
The second part is the helper to interact with selected elements and choose options.

How to use:
First, import the select module into your PageObject Class:

```javascript
const Select = require('esquadro/select');
```

After import, create instance this module:
```javascript
const selectType = new Select(element);
```
The constructor receives which element to manipulate

This helper has these methods bellow:

* getOptions()

It returns all options in Select element

E.g.:
```javascript
selectType.getOptions().then(function(options){
  options[1].getText().then(function(value){
    console.log(value);
  });
});
```
In this case, it returns text from the first element of the options in a selected element and prints this value

* getOptionSelected()

It returns the option selected in the select element

E.g.:
```javascript
  selectType.getOptionSelected().getText().then(function(value) {
    console.log(value);
  });
```
In this case, it returns text from the option selected in select element

* selectByValue

The above method selects the option by the value of the select element

E.g.:
```javascript
  selectType.selectByValue('fire');
```
In this case, it selects the option where value equals 'fire'

* selectByVisibleText

The above method selects the option by visible text of the select element

E.g.:
```javascript
  selectType.selectByVisibleText('FIRE');
```
In this case, it selects the option where your text equals 'FIRE'

* selectByIndex

The above method selects the option by index in a list of options of the select element

E.g.:
```javascript
  selectType.selectByIndex(2);
```
In this case, it selects the option where your index is 2, starting the count at 0