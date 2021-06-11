## Introduction

Thanks for reviewing my code.

## Exercise 1 & 2

- Run `yarn` and `yarn start` to see the exercises locally.
- I put the two exercises on different routes.
- I used React, SASS, CSS modules and Material UI library to complete the test.

## Bonus

Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

Steps:

- ('b' + 'a' + ( + 'a' ) + 'a').toLowerCase()
- ('ba' + ( + 'a' ) + 'a').toLowerCase()
- ('ba' + NaN + 'a').toLowerCase()
- ('baNaN' + 'a').toLowerCase()
- ('baNaNa').toLowerCase()
- 'banana'
