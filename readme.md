Instructions
---
1. Serve the directory. e.g. python -m SimpleHTTPServer 3000
2. Vist http://localhost:3000/assessment-1.html
3. Vist http://localhost:3000/assessment-2.html

###### Bonus points
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

Explantion
---
+ + 'a' tries to covert the string to a number and since 'a' is a string the result is NaN (Not a number). 

Here's another cool one you've probably seen too: Array(16).join('wat' - 1)+" Batman!"