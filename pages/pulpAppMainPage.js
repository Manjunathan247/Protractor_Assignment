var PulpAppMainPage = function () {

    this.createNavBar = function () {
        //element(by.xpath("//nav[@id='primary_nav_wrap']/ul/li[8]/a"));
        return element(by.linkText('Create'));
    };

    this.seriesNavBar = function () {
        //element(by.xpath("//nav[@id='primary_nav_wrap']/ul/li[8]/a"));
        //return element(by.linkText('Series'));
        return element(by.xpath("//*[@id='primary_nav_wrap']/ul/li[5]/a"));
    };

    this.author = function () {
       return element(by.linkText('Author'));
    };

    this.series = function () {
        //return element(by.linkText('Series'));
        return element(by.xpath("//*[@id='primary_nav_wrap']/ul/li[8]/ul/li[2]"));
    };

    this.publisher = function () {
        return element(by.linkText('Publisher'));
    };

    this.book = function () {
        return element(by.linkText('Book'));
    };
}

module.exports =new PulpAppMainPage();