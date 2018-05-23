# Example 1: one-module TS/JS project

Here you will find an example of project configured to be analyzed with [SonarTS](https://github.com/SonarSource/sonarts).

## Scope:
* Only TS/JS sources

## Steps to follow to set up your project the same way
* Install [`sonarqube-scanner`](https://github.com/bellingard/sonar-scanner-npm)
```
npm install -D sonarqube-scanner
```
* Create [script file](analyse.js) using `sonarqube-scanner`. This scanner reads the package.json file for project name, description etc. Other analysis properties could be provided as options in your script file.

_We recommend to set version of project manually through script file to not depend on the one from `package.json` ([like this](analyse.js#L8)). That way you will be able to profit from correct [leak period](https://docs.sonarqube.org/display/SONAR/Fixing+the+Water+Leak) and focus on quality issues introduced since last release._

* Execute this script
```
node analyse.js
```

## Coverage
* In order to send coverage to your SonarQube first generate it. In the case of our example:
```
npm run test
```
* Then provide coverage report location as value of `sonar.typescript.lcov.reportPaths` property of your analysis (see [`analyse.js`](analyse.js))
* Run analysis and find your coverage in SonarQube!
* This project also uses [`jest-sonar-reporter`](https://www.npmjs.com/package/jest-sonar-reporter) to generate 
[test execution data](https://docs.sonarqube.org/display/SONAR/Generic+Test+Data#GenericTestData-GenericExecution). See configuration in [`jest.config.js`](jest.config.js). 
Report is uploaded by setting `sonar.testExecutionReportPaths` property (see [`analyse.js`](analyse.js)) 
* See documentation about tests and coverage import [here](https://docs.sonarqube.org/display/PLUG/TypeScript+Test+Execution+and+Coverage+Results+Import)
