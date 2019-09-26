var selectDropdownbyNum = function ( element, optionNum ) {
    if (optionNum){
      var options = element.all(by.tagName('option'))   
        .then(function(options){
          options[optionNum].click();
        });
    }
  };

  module.exports = selectDropdownbyNum;