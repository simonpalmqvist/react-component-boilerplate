# Boilerplate for building, testing and releasing React components to NPM
Using Mocha and Enzyme for testing and Standardjs for linting.

## Setup
* Create your components in the src folder and import and export them in ./src/app.js
* Add your components to the TestApp in ./test/util/render.jsx
* Spin up web server with `npm start`

## Testing
* Write tests in ./test/ and end the file with .test.jsx
* Run tests with `npm run test`

## Publish to NPM
* Update information in README and package.json
* Make sure components are exported in app.js
* Run following commands
```
npm run build
npm login
npm publish
```
