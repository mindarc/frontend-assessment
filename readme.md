## Project name

MindArc Frontend Assessment | CJ Pantaleon

## Technologies used

ReactJS, SASS, Bootstrap

## Setup

### `npm install`

Install node_modules

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Banana

Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.

- 'b' + 'a' concatenates both string which results to 'ba'. Following the string concatenation, '+ (+ 'a')' used a unary operator which converts to a Number type resulting to `NaN`, having us baNaN as the result. baNaN + a results to baNaNa since it is a regular concatenation. Lastly, .toLowerCase() converts string to lower case.
