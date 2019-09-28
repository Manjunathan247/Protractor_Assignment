var SelectWrapper = function(selector) {
    this.webElement = element(selector);

    this.selectByText = function(text) {
        return this.webElement.all(by.xpath('option[.="' + text + '"]')).click();   
    };
};

module.exports = SelectWrapper;