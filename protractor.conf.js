// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const crew = require('serenity-js/lib/stage_crew');

exports.config = {
  allScriptsTimeout: 11000,
   //getPageTimeout: 50000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  
  capabilities: {
    'browserName': 'chrome',
   // 'idleTimeout':' 120'
  //    'proxy': {
  //   'proxyType': 'manual',
  //   'httpProxy': 'http://172.18.65.22:80'
  // }
},

  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  useAllAngular2AppRoots: true,
 rootElement: 'app-root',

  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },

//    framework: 'custom',
//     frameworkPath: require.resolve('serenity-js'),

//     serenity: {
//        crew:    [
//             crew.serenityBDDReporter(),
//             crew.photographer(),
           
//             //  crew.consoleReporter(),
//         ],
//         dialect: 'cucumber' ,    // or 'mocha'
//         stageCueTimeout: 30 * 1000 ,  // up to 30 seconds by default,

//     },
    

//     specs: [ 'features/**/*.feature' ],

//     cucumberOpts: {
//         require:    [ 'features/**/*.ts' ], // loads step definitions
//         format:     'pretty',               // enable console output
//         compiler:   'ts:ts-node/register'   // interpret step definitions as TypeScript
//     },
  
  onPrepare: function() {
//     var width = 1600;
//     var height = 1200;
//     browser.driver.manage().window().setSize(width, height);
 
//      browser.manage().window().maximize();
//      browser.get('http://localhost:49159/login');
// },

    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
   savePath: './test/reports/',
   screenshotsFolder: 'images',
 
}));
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  
  }
};
