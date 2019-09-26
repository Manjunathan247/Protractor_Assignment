var CreateAuthor = function()
{

    this.authorName =  element(by.id('authorname'));

    this.enterAuthorName = function (author_Name) {
        return this.authorName.sendKeys(author_Name);
    };

    this.createButton = function() {
        return element(by.id('create'));  
    };

    this.addedAuthorList = function() {
        return element(by.xpath("//h2[starts-with(text(),'Added Author')]"));  
    };
}

module.exports = new CreateAuthor();