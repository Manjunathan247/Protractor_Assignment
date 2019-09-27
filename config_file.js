exports.config =
    {
        seleniumAddress: 'http://localhost:4444/wd/hub',

        framework: 'custom',
        frameworkPath: require.resolve('protractor-cucumber-framework'),

        specs: [
            'features/*.feature'
        ],
        cucumberOpts: {
            require: 'steps/*_steps.js',
            
        },

        plugins: [{
            package: 'protractor-multiple-cucumber-html-reporter-plugin', 
            options: {      
              automaticallyGenerateReport: true,  
              removeExistingJsonReportFile: true    
            }  
          }],

        onPrepare : async function(){
            browser.ignoreSynchronization = true;
            //await browser.waitForAngularEnabled(false);
            browser.driver.manage().window().maximize();
            await browser.get("https://thepulper.herokuapp.com/apps/pulp/");
        }
    }