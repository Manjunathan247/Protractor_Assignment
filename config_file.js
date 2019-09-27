exports.config =
    {
        seleniumAddress: 'http://localhost:4444/wd/hub',

        capabilities: {
            browserName: 'chrome',
        },

        framework: 'custom',
        frameworkPath: require.resolve('protractor-cucumber-framework'),

        specs: [
            'features/*.feature'
        ],
        cucumberOpts: {
            require: 'steps/*_steps.js',
            format: 'json:.tmp/results.json',
        },

        plugins: [{
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                reportPath: 'reports/',
                displayDuration: true,
            }
        }],

        onPrepare: async function () {
            browser.ignoreSynchronization = true;
            //await browser.waitForAngularEnabled(false);
            browser.driver.manage().window().maximize();
            await browser.get("https://thepulper.herokuapp.com/apps/pulp/");
        }
    }