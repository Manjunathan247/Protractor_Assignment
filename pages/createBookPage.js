var CreateBook = function () {

    this.titleBook = element(by.id('booktitle'));
    this.author = element.all(by.tagName('option'));
    this.publisher = element.all(by.tagName('option'));
    this.series = element.all(by.tagName('option'));
    this.seriesId = element(by.id('seriesidentifierid'));
    this.publicationYear = element(by.id('yearofPub'));

    this.titleOfBook = function (book_Title) {
        return this.titleBook.sendKeys(book_Title);
    };

    this.authorOfBook = function (authorOfBook) {
        //element(by.id('authoridselect')).$('[value="J. Allan Dunn"]');
        var options = this.author.then(function (options) 
        {
            options[authorOfBook];
        });
    };

    this.publisherOfBook = function (publisherOfBook) {
        var options = this.publisher.then(function (options) 
        {
            options[publisherOfBook];
        });
    };

    this.seriesOfBook = function (seriesOfBook) {
        var options = this.series.then(function (options) 
        {
            options[seriesOfBook];
        });
    };

    this.seriesIdentifierOfBook = function (seriesIdOf_Book) {
        return this.seriesId.sendKeys(seriesIdOf_Book);
    };

    this.yearofpublication = function (yearof_publication) {
        return this.publicationYear.sendKeys(yearof_publication);
    };
    
    this.createButton = function () {
        return element(by.id('create'));  
    };

    this.addedBookList = function () {
        return element(by.xpath("//h2[starts-with(text(),'Added Book')]"));  
    };
}

module.exports = new CreateBook();

