var TableOfBooks = function () {
    this.rowsOftable = element.all(by.xpath("/html/body/table/tbody/tr"));
    this.numberOfData = element.all(by.xpath("/html/body/table/tbody/tr[2]/td"));
    this.tableHeader = element.all(by.xpath("/html/body/table/tbody/tr/th"));
    this.titleOfBooks = element.all(by.xpath("/html/body/table/tbody/tr[2]/td[i]"));
    
    this.rows = async function (numberOfData) {
        await console.log("Details of Books:");
        for (let i = 1; i <=numberOfData.length; i++) {
            var details = await element.all(by.xpath("/html/body/table/tbody/tr[2]/td[" + [i] + "]")).getText();
            var detailsOfBooks=details.toString();  
            await console.log(detailsOfBooks);
        }
        //return this.titleOfBooks = element.all(by.xpath("/html/body/table/tbody/tr[2]/td[i]"));
        // return this.authorsOfBooks = element.all(by.xpath("/html/body/table/tbody/tr[2]/td[i+1]"));
        // return this.published = element.all(by.xpath("/html/body/table/tbody/tr[2]/td[i+2]"));
        // return this.publisherOfBooks = element.all(by.xpath("/html/body/table/tbody/tr[2]/td[i+3]"));
        // return this.seriesOfBooks = element.all(by.xpath("/html/body/table/tbody/tr[2]/td[i+4]"));
    }

    // this.titleOfBooks = element.all(by.xpath("/html/body/table/tbody/tr[2]/td[1]"));
    // this.authorsOfBooks = element.all(by.xpath("/html/body/table/tbody/tr[2]/td[2]"));
    // this.published = element.all(by.xpath("/html/body/table/tbody/tr[2]/td[3]"));
    // this.publisherOfBooks = element.all(by.xpath("/html/body/table/tbody/tr[2]/td[4]"));
    // this.seriesOfBooks = element.all(by.xpath("/html/body/table/tbody/tr[2]/td[5]"));
};

module.exports = new TableOfBooks();