
var xlsxj = require("xlsx-to-json");
var excelToJson = function () {
    Data = function () {
        xlsxj({
            input: "Data.xlsx",
            output: "testData.json",
            sheet: "Sheet1"

        }
        )

    }
}

module.exports = new excelToJson();
