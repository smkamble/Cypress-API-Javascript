### Cypress with Javascript Framework

<p align="center">
   <i><strong>This project demonstrates the cypress-mocha-javascript framework.
</strong></i>
<p>
<p align="center">
  <a href="https://docs.cypress.io/guides/overview/why-cypress.html">Documentation</a> |
  <a href="https://docs.cypress.io/api/api/table-of-contents.html">Cypress API Docs</a> |
</p>

### Introduction 
This is Test Automation framework designed using Cypress, Mocha and Javascript for API testing and to be used by QA Engineer.

### Framework Structure
```
├───cypress                         # This folder contains Workspace setting and debug configuration setting
│   ├───fixture                     # This contains external pieces of static data that can be used by your tests
│   └───integration                 # This contains test file
│   └───plugins                     # This contains plugins
│   └───reports                     # This contains html report
│   └───screenshots                 # This contains screenshots for failure test
│   └───supports                    # This contains reusable code
│   └───video                       # This contains execution video 
├───node_modules                    # This contains downloaded libraries
├───logs                            # This folder contains log text file
└───package.json                    # This contains dependencies, script section, other information
```
### Tools and Technologies
Cypress (4.12.1)
NodeJS installed and setup(To download Cypress and its dependencies)
```
```
### Prerequisite:
* Download and install Chrome browser.
* Download and install Node.js:
  * [Install Node.JS](https://qaloop.tk/blog/install-node-js/ "Install Node.JS")
* Download and install any Text Editor like Visual Code
  * [Install Visual Studio Code](https://qaloop.tk/blog/install-visual-studio-code/ "Install Visual Studio Code")
```
```
### Setup Scripts 
* Clone the repository into a folder 
* Go to Project root directory and install Dependency using command: `npm install`
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

```
```
### How to Run Test
* Go to Project root directory and Run complete Test Suite: `npm run test`
