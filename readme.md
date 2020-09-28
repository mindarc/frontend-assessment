# mindarc-assessment

## Build Setup

```bash
# Goto mindarc-assesment folder
$ cd mindarc-assesment

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

###### Bonus points
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

Explantion
---
+ + 'a' tries to covert the string to a number and since 'a' is a string the result is NaN (Not a number). 

Here's another cool one you've probably seen too: Array(16).join('wat' - 1)+" Batman!"