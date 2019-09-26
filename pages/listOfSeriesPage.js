var ListOfSeriesPage = function () {
    this.selectList = element.all(by.xpath("(/html/body/ul/li[1]/a)[1]"));
    this.list = element.all(by.xpath("/html/body/ul/li"));
    this.listOfBooks = element(by.linkText("List of Books in Series"));

    this.createNavBar = function () {
        element(by.linkText('Create'));
    };

    this.listOfSeries = async function (seriesNameList) {
        for (let j = 0; j < await seriesNameList.length; j++) {
            var seriesName = await seriesNameList[j].getText();
            await console.log(seriesName);
        }
    }
}

module.exports = new ListOfSeriesPage();