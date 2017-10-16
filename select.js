'use strict'

class Select{
    constructor(select){
      this.select = select;
    }

    getOptions(){
      return this.select.all(by.tagName('option'));
    }
    
    getOptionSelected() {
      return this.select.all(by.css('option[selected="selected"]'));
    }

    selectByValue(value) {
      return this.select.all(by.css('option[value="' + value + '"]')).click();
    }

    selectByVisibleText(texto) {
      return this.select.all(by.xpath('option[.="' + texto + '"]')).click();   
    }
    selectOptionByIndex = function  (index) {
      return this.select.all(by.css('option')).get(index).click();
    };
}

module.exports = Select;