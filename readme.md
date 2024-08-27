Introduction
---
Thank you for your time and this opportunity, I hope to hear back from you soon.


Instructions
---
Starting this project in your local development environment is the standard process as with most Vite projects.
1. Open a terminal window in the root directory
2. Type `npm install`
3. Type `npm run dev`
4. *Ctrl + Click* the link to the newly opened port


Bonus Point Question
---
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

The result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana` due to a type error from JavaScript's engine. It assumes that `+ 'a'` is to be applied to a number. But `'a'` is a string, so it returns `NaN` instead.
`('b' + 'a' + NaN + 'a').toLowerCase()`

The function `.toLowerCase()` is then applied, converting all types into strings instead. Resulting in `banana` as the final result. JavaScript has many oddities like this, and solutions like ESLint and TypeScript have been developed to help solve these issues before they occur.