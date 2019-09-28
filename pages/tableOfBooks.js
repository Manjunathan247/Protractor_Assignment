var TableOfBooks = function () {
    this.rowsOftable = element.all(by.xpath("//tbody/tr"));
    this.numberOfData = element.all(by.xpath("//tbody/tr[2]/td"));
    this.tableHeader = element.all(by.xpath("//tbody/tr/th"));
    this.titleOfBooks = element.all(by.xpath("//tbody/tr[2]/td[i]"));
    
    this.title = element(by.xpath("//tbody/tr[2]/td[1]/a"));
    this.authors = element(by.xpath("//tbody/tr[2]/td[2]"));
    this.published = element(by.xpath("//tbody/tr[2]/td[3]"));
    this.publisher = element(by.xpath("//tbody/tr[2]/td[4]"));
    this.series = element(by.xpath("//tbody/tr[2]/td[5]"));

    this.rows = async function (numberOfData) {
        await console.log("Details of Books:");
        for (let i = 1; i <=numberOfData.length; i++) {
            var details = await element.all(by.xpath("//tbody/tr[2]/td[" + [i] + "]")).getText();
            var detailsOfBooks = details.toString();  
            await console.log(detailsOfBooks);
        }
    }
};
module.exports = new TableOfBooks();