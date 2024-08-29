Installation Instructions
---
To run the application locally, follow these steps:

1. Download the zip file and open the project in VS code or clone the repository via terminal: git clone https://github.com/icyjms/frontend-assessment.git
2. Locate the folder from where you execute the command on the first step
3. Install dependencies: npm install
4. Run the application: npm run serve
5. Navigate to the URL i.e. http://localhost:8080/

Bonus points answer
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.
    - The first “b” and “a” get added up as “ba”. With the second “a” you see a double plus sign, the first one is for addition, the second one is in order to convert a string to a number. For example, var a = +”5” will make the variable a the number 5. Its called a unary operator in javascript. Because the string value doesn’t represent a number, (its the character “a” after all) it will convert the string to a number of value NaN (not a number), which funnily enough is of type number. Last “a” gets properly added. You end up with the string “baNaNa”, which is lowercased into “banana”.
