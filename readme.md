# Frontend Assessment by Nicole Mico

## 👋 Introduction

I used VueJS to display the two exercises is a single Vue application. Navigate to the links provided to view the respective exercise.
|Exercise|Link|
|---|---|
|Exercise 1|/|
|Exercise 2|/data-display|

## 🚀 Technologies used

| Tech       | Version |
| ---------- | ------- |
| VueJS      | ^3.3.10 |
| Bootstrap  | ^5.3.2  |
| Typescript | ~5.2.0  |

## 🏁 Get Started

Open the project folder on your terminal and enter `npm run dev`.

## ❓ Bonus Question

> Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

In an arithmetic operation, if an operator is preceded by a blank space or nothing and is followed by a non-numeric value like a string or character, the result is NaN (Not A Number).

'b' + 'a' + + 'a' + 'a' can be interpreted as 'b' + 'a' + (+ 'a') + 'a' where (+ 'a') is evaluated as `NaN`.
'b' + 'a' + + 'a' + 'a' is evaluated to "baNaNa", which is turned to lowercase "banana" when fed to the .toLowerCase() function.
