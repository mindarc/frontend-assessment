//`('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

// Explanation
// Adding/Concatenate operations.

// 1. 'b' + 'a' = 'ba' ---just a common concatenation
// 2. + 'a' = NaN (not a number) --- Since there is a unary operator with one value is required to produce a result. But we are trying to convert the string 'a' into a number.

// 3. NaN + 'a' = 'NaNa' since we are concatenating the NaN with string 'a'. The NaN will be converted to string.
// 4. then we are making it to small letters. = 'banana'
