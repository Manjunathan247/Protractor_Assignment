var excelReader = function () {
    var excel = require('xlsx');
    var workbook = excel.readFile('Data.xlsx');
    var sheet = workbook.SheetNames[0];

    var worksheet = workbook.Sheets[sheet];

    // var authorName_1 = 'B1';
    // var seriesName_1 = 'B2';
    // var publisherName_1 = 'B3';
    // var bookTitle_1 = 'B4';

    // var authorName = worksheet[authorName_1];
    // var seriesName = worksheet[seriesName_1];
    // var publisherName = worksheet[publisherName_1];
    // var bookTitle = worksheet[bookTitle_1];

    // var author_value1 = authorName.v;
    // var series_value1 = seriesName.v;
    // var publisher_value1 = publisherName.v;
    // var bookTitle_value1 = bookTitle.v;

    this.Authorvalues = function () {
        for (var i = 1; i <= 5; i++) {
            var authorName_1 = 'B[" + i + "]';
            var authorName = worksheet[authorName_1];
            var author_value1 = authorName.v;
        }
        return author_value1;
    };

    this.Seriesvalues = function () {
        for (var i = 1; i <= 5; i++) {
            var seriesName_1 = 'B[" + i + "]';
            var seriesName = worksheet[seriesName_1];
            var series_value1 = seriesName.v;
        }
        return series_value1;
    };

    this.Publishervalues = function () {
        for (var i = 1; i <= 5; i++) {
            var publisherName_1 = 'B[" + i + "]';
            var publisherName = worksheet[publisherName_1];
            var publisher_value1 = publisherName.v;
        }
        return publisher_value1;
    };

    this.BookTitlevalues = function () {
        for (var i = 1; i <= 5; i++) {
            var bookTitle_1 = 'B[" + i + "]';
            var bookTitle = worksheet[bookTitle_1];
            var bookTitle_value1 = bookTitle.v;
        }
        return bookTitle_value1;
    }
}

module.exports = new excelReader();