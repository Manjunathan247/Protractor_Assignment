var CreatePublisher = function()
{
    this.publishName =  element(by.id('publishername'));

    this.enterPublisherName = function (publisher_Name) {
        return this.publishName.sendKeys(publisher_Name);
    };

    this.createButton = function () {
        return element(by.id('create'));  
    };

    this.addedPublisherList = function () {
        return element(by.xpath("//h2[starts-with(text(),'Added Publisher')]"));  
    };
}

module.exports = new CreatePublisher();