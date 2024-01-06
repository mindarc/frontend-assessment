Mark Adolf Ferolino Frontend Assessment
# Vue.js Bootstrap 5

## Description
This project is an assessment for demonstrating proficiency in Vue.js and Bootstrap 5.

## Table of Contents
- [Exercise 1 Installation]
- [Exercise 2 Installation]
- [Usage]

## Features
- [List the main features or functionalities implemented in the assessment]


## Exercise 1 Installation
1. Clone the repository:

    ```bash
    git clone https://github.com/kramferolino/frontend-assessment
    ```

2. Navigate to the project directory:

    ```bash
    cd /frontend-assessment/exercise-one
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage
Run the project using:

    ```bash
    npm run serve
    ```

## Exercise 2 Installation
1. Clone the repository:

    ```bash
    git clone https://github.com/kramferolino/frontend-assessment
    ```

2. Navigate to the project directory:

    ```bash
    cd /frontend-assessment/exercise-two
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage
Run the Json Server first before running npm run serve

    ```bash
    json-server --watch data/data.json
    ```

    ```bash
    npm run serve
    ```

## Answer to Bonus Question
The expression ('b' + 'a' + + 'a' + 'a').toLowerCase() when evaluated follows a sequence: first, concatenating the strings 'b' and 'a' that results in 'ba'. Then, converting the string 'a' to a number by using the unary plus (+) resulting to a NaN (Not-a-Number). This NaN value is changed into a string when concatenated with 'ba', leading to 'baNaN'. Finally, adding 'a' to 'baNaN' resulting to 'baNaNa'. Calling .toLowerCase() on this string converts all characters to lowercase, showing the value as 'banana'.
