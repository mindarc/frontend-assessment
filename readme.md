Installation Instructions
---
1. After you succesfuly clone the repository you may start running npm install in the terminal
2. Once done, execute this command "npm run serve" in the terminal to run the application

###### Bonus points
* Improve the user experience with meaningful animations/transitions.
* Design and styling.
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.
    - The first “b” and “a” get added up as “ba”. With the second “a” you see a double plus sign, the first one is for addition, the second one is in order to convert a string to a number. For example, var a = +”5” will make the variable a the number 5. Its called a unary operator in javascript. Because the string value doesn’t represent a number, (its the character “a” after all) it will convert the string to a number of value NaN (not a number), which funnily enough is of type number. Last “a” gets properly added. You end up with the string “baNaNa”, which is lowercased into “banana”.
