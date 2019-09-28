defineSupportCode(function({After, registerListener}) {
	
	var writeScreenshotToFile = function(image) {
		
		if (!fse.existsSync(screenshotDir)) {
			fse.mkdirSync(screenshotDir);
		}
		var date = new Date();
		var timestamp = date.getTime();
		var filename = "error_"+timestamp+".png";
		var stream = fse.createWriteStream(screenshotDir + filename);
		stream.write(image);
        stream.end();
	};
	
	After(function(scenario, done) {
		let self = this;
		if (scenario.isFailed()) {
			browser.takeScreenshot().then(function(png) {
		        let decodedImage = new Buffer(png.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
		        writeScreenshotToFile(decodedImage);
		        self.attach(decodedImage, 'image/png');
				done();
			}, function(err) {
				done(err);
			});
		} else {
			done();
		}
    })
})