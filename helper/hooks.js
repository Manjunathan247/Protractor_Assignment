var {After,Status} = require('cucumber');

var Screenshot = function() {
	After(async function(scenario) {

		if(scenario.result.status===Status.FAILED){
	
			const screenshot = await browser.takeScreenshot();
			this.attach(screenshot,"image/png");
		}
	});
}

module.exports = new Screenshot();
