# MindArc Frontend Assessment

## Project setup
```
npm install
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and hot-reloads for development
```
npm run watch
```
The server will run at http://localhost:8080

###### Bonus points
* `banana` will be the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` because `'b' + 'a'` = `'ba'`, and `+ + 'a'` = `'NaN'` (not a number). The last `'a'` will concatenate to `'ba'` and `'NaN'` so it will return `'baNaNa'`. The result string will use the `toLowerCase()` method to transform the string to lowercase. The final output is `'banana'`. 
