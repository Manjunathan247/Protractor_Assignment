var CreateSeries = function()
{
    this.seriesName = element(by.id('seriesname')); 

    this.nameOfSeries = function (series_Name) {
         return this.seriesName.sendKeys(series_Name);
    };

    this.createButton = function () {
        return element(by.id('create'));  
    };

    this.addedSeriesList = function () {
        return element(by.xpath("//h2[starts-with(text(),'Added Series')]"));  
    };
};

module.exports = new CreateSeries();