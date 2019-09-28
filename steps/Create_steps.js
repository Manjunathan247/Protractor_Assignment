
var sample = function () {

    var excel = require('../pages/excelToJson.js');
    var pulpAppMainPage = require('../pages/pulpAppMainPage.js');
    var createAuthorPage = require('../pages/createAuthorPage.js');
    var createSeriesPage = require('../pages/createSeriesPage.js');
    var createPublisherPage = require('../pages/createPublisherPage');
    var createBookPage = require('../pages/createBookPage.js');
    var listofSeriesPage = require('../pages/listOfSeriesPage.js');
    var tableOfBooksPage = require('../pages/tableOfBooks.js');

    var { setDefaultTimeout } = require('cucumber');
    setDefaultTimeout(60 * 1000);
    var { defineSupportCode } = require('cucumber');
    var chai = require('chai').use(require('chai-as-promised'));
    var expect = chai.expect;

    defineSupportCode(function ({ Given, When, Then, After }) {

        Given('The Pulp app main menu is open', async function () {
            var title = await browser.getTitle();
            console.log("Title of the page is " + title);
            await expect(title).to.equal("Pulp App Main Menu");
        });

        When('I mouse hover on Create link in navigation bar', async function () {
            await browser.actions().mouseMove({ x: 503, y: 15 }).perform();
            //await browser.actions().mouseMove(mainPage.createNavBar()).perform();
        });

        Then('It should display Author,Series,Publisher and Book under Create link', async function () {
            await expect(pulpAppMainPage.author().isDisplayed()).to.eventually.be.true;
            await expect(pulpAppMainPage.series().isDisplayed()).to.eventually.be.true;
            await expect(pulpAppMainPage.publisher().isDisplayed()).to.eventually.be.true;
            await expect(pulpAppMainPage.book().isDisplayed()).to.eventually.be.true;
        });

        Given('The Author link should display under Create', async function () {
            await expect(pulpAppMainPage.author().isDisplayed()).to.eventually.be.true;
        });

        When('I click on Author link', async function () {
            await pulpAppMainPage.author().click();
        });

        Then('It should navigate to Create Author page', async function () {
            var titleAuthorPage = await browser.getTitle();
            console.log("Title of the page is " + titleAuthorPage);
            await expect(titleAuthorPage).to.equal("Create Author");
        });

        Then('I enter name of the author', async function () {
            console.log("Value of the Author field : " + excel.testConfig.author1);
            await createAuthorPage.enterAuthorName(excel.testConfig.author1);
        });

        Then('I click on Create link to create Author', async function () {
            await createAuthorPage.createButton().click();
        });

        Then('the author should be added to the list', async function () {
            var Authortext = await createAuthorPage.addedAuthorList().getText();
            console.log("Name of the author added to the list is " + Authortext);
            await expect(Authortext).to.equal("Added Author Demo_Author_1");
        });

        Given('The Series link should display under Create', async function () {
            await browser.navigate().back();
            //await browser.actions().mouseMove({ x: 503, y: 15 }).perform();
            await browser.actions().mouseMove(pulpAppMainPage.createNavBar()).perform();
            await expect(pulpAppMainPage.series().isDisplayed()).to.eventually.be.true;
        });

        When('I click on Series link', async function () {
            await pulpAppMainPage.series().click();
        });

        Then('It should navigate to Create Series page', async function () {
            var titleSeriesPage = await browser.getTitle();
            console.log("Title of the page is " + titleSeriesPage);
            await expect(titleSeriesPage).to.equal("Create Series");
        });

        Then('I enter name of the Series', async function () {
            await createSeriesPage.nameOfSeries(excel.testConfig.series1);
        });

        Then('I click on Create link to create Series', async function () {
            await createSeriesPage.createButton().click();
        });

        Then('the Series should be added to the list', async function () {
            var seriesList = await createSeriesPage.addedSeriesList().getText();
            console.log("Name of the series added to the list is " + seriesList);
            await expect(seriesList).to.equal("Added Series Demo_Series_1");
        });

        Given('The Publisher link should display under Create', async function () {
            await browser.actions().mouseMove(pulpAppMainPage.createNavBar()).perform();
            await expect(pulpAppMainPage.publisher().isDisplayed()).to.eventually.be.true;
        });

        When('I click on Publisher link', async function () {
            await pulpAppMainPage.publisher().click();
        });

        Then('It should navigate to Create Publisher page', async function () {
            var titlePublisherPage = await browser.getTitle();
            console.log("Title of the page is " + titlePublisherPage);
            await expect(titlePublisherPage).to.equal("Create Publisher");
        });

        Then('I enter name of the Publisher', async function () {
            await createPublisherPage.enterPublisherName(excel.testConfig.publisher1);
        });

        Then('I click on Create link to create Publisher', async function () {
            await createPublisherPage.createButton().click();
        });

        Then('the Publisher should be added to the list', async function () {
            var publisherList = await createPublisherPage.addedPublisherList().getText();
            console.log("Name of the Publisher added to the list is : " + publisherList);
            await expect(publisherList).to.equal("Added Publisher Demo_Publisher_1");
        });

        Given('The Book link should display under Create', async function () {
            await browser.actions().mouseMove(pulpAppMainPage.createNavBar()).perform();
            await expect(pulpAppMainPage.book().isDisplayed()).to.eventually.be.true;
        });

        When('I click on Book link', async function () {
            await pulpAppMainPage.book().click();
        });

        Then('It should navigate to Create Book page', async function () {
            var titleBookPage = await browser.getTitle();
            console.log("Title of the page is " + titleBookPage);
            await expect(titleBookPage).to.equal("Create Book");
        });

        Then('I enter the title of the book', async function () {
            await createBookPage.titleOfBook(excel.testConfig.book1);
        });

        Then('I select the Author from drop down', async function () {
            await createBookPage.authorOfBook(excel.testConfig.authorOfBook);
        });

        Then('I select the Publisher from drop down', async function () {
            await createBookPage.publisherOfBook(excel.testConfig.publisherOfBook);
        });

        Then('I select the Series from drop down', async function () {
            await createBookPage.seriesOfBook(excel.testConfig.seriesOfBook);
        });

        Then('I enter the Series Identifier', async function () {
            await createBookPage.seriesIdentifierOfBook(excel.testConfig.seriesIdentifierOfBook);
        });


        Then('I enter the Year of publication', async function () {
            await createBookPage.yearofpublication(excel.testConfig.yearofpublication);
        });

        Then('I click on Create link to create Book', async function () {
            await createBookPage.createButton().click();
        });

        Then('the Book should be added to the list', async function () {
            var bookList = await createBookPage.addedBookList().getText();
            console.log(bookList);
            await expect(bookList).to.equal("Added Book Demo_Book_1");
        });

        When('I click on Series navigation link', async function () {
            await pulpAppMainPage.seriesNavBar().click();
            var titleListOfSeriesPage = await browser.getTitle();
            console.log("Title of the page is " + titleListOfSeriesPage);
            await expect(titleListOfSeriesPage).to.equal("List of Series");
        });

        Then('It should display with list of created series', async function () {
            var seriesNameList = await listofSeriesPage.list;
            console.log("There are " + seriesNameList.length + " series in the series list page");
            for (let j = 0; j < await seriesNameList.length; j++) {
                var seriesName = await seriesNameList[j].getText();
                console.log(seriesName);
            }
        });

        Then('I click on created series link', async function () {
            await listofSeriesPage.selectList.click();
        });

        Then('It should display selected series details page', async function () {
            var titleSeriesDetailPage = await browser.getTitle();
            console.log("Title of the page is " + titleSeriesDetailPage);
            await expect(titleSeriesDetailPage).to.equal("View Series");
        });

        Then('I click on List of Books in Series', async function () {
            await listofSeriesPage.listOfBooks.click();
        });

        Then('It should display the table of books in the series', async function () {
            var tableOfBooksPage = await browser.getTitle();
            console.log("Title of the page is " + tableOfBooksPage);
            await expect(tableOfBooksPage).to.equal("Table of Books");
        });

        When('I fetch the details of books', async function () {
            //Number of columns
            var nameOfTableHeader = await tableOfBooksPage.tableHeader;
            console.log("Number of columns in the table is " + nameOfTableHeader.length);

            //Number of Rowa
            var numberOfRows = await tableOfBooksPage.rowsOftable;
            console.log("Number of rows in the table is " + numberOfRows.length);

            var numberOfData = await tableOfBooksPage.numberOfData;
            await console.log("table: " + numberOfData.length)
            await tableOfBooksPage.rows(numberOfData);
        });

        Then('I should validate UI data with testdata', async function () {
            var bookTitle = await tableOfBooksPage.title.getText()
            await expect(bookTitle).to.equal(excel.testConfig.book1);

            var authors = await tableOfBooksPage.authors.getText()
            await expect(authors).to.equal(excel.testConfig.author1);

            var published = await tableOfBooksPage.published.getText()
            await expect(Number(published)).to.equal(excel.testConfig.yearofpublication);

            var publisher = await tableOfBooksPage.publisher.getText()
            await expect(publisher).to.equal(excel.testConfig.publisher1);

            var series = await tableOfBooksPage.series.getText()
            await expect(series).to.equal(excel.testConfig.series1);

            await browser.sleep(10000);
        });
    });
}
module.exports = new sample();
