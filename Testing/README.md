Testing: 

1. Unit Testing and Integration Testing
    - Component Testing
    - Jest & JS DOM
    - Testing Library / React Testing Library

2. Automation Testing 
    - Using puppeteer we did a small e2e testing on Namaste Dev sit for headless and headfull Browsers
    - There are also tools like Cypress, Selenium where we can do Automation testing 

3. A/B Testing 
    - Bucket or Split Testing
    - A/B testing works on Data Driven Desecion 
    - Tool (Wasabi - now outdated), A B Tasty etc...

4. Performance Testing
    - Performance is all about Page Load Time & Page Speed 
    - Key Parameters: DCL, LCP, FP, FCP
    - Tools: Dev Tools -> Performace Tab & Lighthouse, PageSpeed Insights, WebPage Test Org
    - Note: Do check the Diagnose portion in the above tools that gives us the answer om how to improve our performance

5. Test Driven Development
    - Red - Green _ Refactor 

6. Security Testing 
    Tools - Burp Suite

7. Setting up Testing in our app (Namaste React App , https://github.com/namastedev/namaste-react/)
    - Installed jest
    - Install React Testing Library
    - Installed Babel dependencies
    - Configure Babel
    - Configure Parcel Config file to disable default babel transpilation
    - Jest - npx jest --init
    - Install jsdom library - (creates an enviornment for testing like its a browser)
    - Install @babel/preset-react - to make JSX work in test cases
    - Include @babel/preset-react inside my babel config
    - npm i -D @testing-library/jest-dom