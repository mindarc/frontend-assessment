## Frontend Assesment

- Exercise 1
- Exercise 2

```
 - Access Exercise 1 by the default route `/`
 - Access Exercise 2 by the route `/exercise-two` or the floating button at bottom right
```

### Usage

```
 ### Install dependencies
```

```bash
npm install
```

### Run

```bash
npm run start
```

###### Bonus points

- Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

```
- After the concatenation of 'b' + 'a' = "ba", The following + 'a' attempts to convert into a number since 'a' is not a number.
This results into 'NaN' which is a "Not a Number". Now the "ba" + "NaN" becomes "baNaN" as it is converted to a string value.
Adding another 'a' results in "baNaNa". Since we converted it into "toLowerCase()" the resut now is "banana".
```
