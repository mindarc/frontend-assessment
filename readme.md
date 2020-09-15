
# Front End Assessment - Bhavin Makwana

## Bonus Point Explanation
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

   The real magic to this result lies within the ```+ +``` part of the code. This occurs because of the mathematical parsing for pre-algebra system for addition and subtraction of positive and negative numbers. 

   Few Examples

   * ```5 + + 5``` is parsed as ```5 + positive 5``` which outputs ```10```
   * ```5 + - 5``` is parsed as ```5 + negative 5``` which outputs ```0```
   * ```5 - - 5``` is parsed as ```5 - (-5)``` which mathematically represents ```5 + 5``` outputing ```10```

  Since Javascript mostly runs on a non blocking operation, it attempts ```+ 'a'``` and returns ```NaN``` (Not a Number), since an alphabet is not a number

  Giving us ```('b' + 'a' + ('NaN') + 'a')``` which concatenates to ```baNaNa``` 

  And ```.toLowerCase()``` gives us ```banana```

## Front End Stack
- Frontend framework: None
- Javascript: ES6
- Stylesheets: [Scss](https://sass-lang.com/)
- Task runner: [Gulp](https://gulpjs.com/)

## Development

- Install dependencies
  ```
  npm install
  ```

- Run hot reloading server
  ```
  npm run server
  ```


## Application structure
```sh
Teacher                   # Front End Assessment directory
│   gulpfile.js           # Gulp task runner
│   index.html            # Exercise 1 
│   exercise2.html        # Exercise 2
│
├─── css
│    └─  app.css          # Sass output  
├─── scss
│    └───...              # Sass files
└─── js
     └───...              # Javascript files

```

## NPM Scripts
- Convert sass into minified css   (*Output:*  ```/css/app.css ```)
  ```
  npm run scss
  ```
- Hot reloading server
	```
	npm run server
	```

**Note** 
Hi There, I've completed all of the given requirements without making use of any external libraries for CSS or JS, in order to showcase my capabilities. I've also attempted to keep the directory as organized and lightweight as I could, hope you finding navigating through the a code an ease :)

Made with ❤️
