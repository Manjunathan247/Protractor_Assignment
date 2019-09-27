const excelToJson = require('convert-excel-to-json');
    const result = excelToJson({
        sourceFile: ('Data.xlsx'),
        header: {
            rows: 1
        }
    });

    var dataRequired = function () {
        this.testConfig = {

            author1 : result.Sheet1[0].A,
            author2 : result.Sheet1[1].A,
            author3 : result.Sheet1[2].A,
            author4 : result.Sheet1[3].A,

            series1 : result.Sheet1[0].B,
            series2 : result.Sheet1[1].B,
            series3 : result.Sheet1[2].B,
            series4 : result.Sheet1[3].B,

            publisher1 : result.Sheet1[0].C,
            publisher2 : result.Sheet1[1].C,
            publisher3 : result.Sheet1[2].C,
            publisher4 : result.Sheet1[3].C,

            book1 : result.Sheet1[0].D,
            book2 : result.Sheet1[1].D,
            book3 : result.Sheet1[2].D,
            book4 : result.Sheet1[3].D,

            authorOfBook :  result.Sheet1[0].E,

            publisherOfBook : result.Sheet1[0].F,

            seriesOfBook : result.Sheet1[0].G,

            seriesIdentifierOfBook : result.Sheet1[0].H,

            yearofpublication : result.Sheet1[0].I,

        }
    }
module.exports = new dataRequired();