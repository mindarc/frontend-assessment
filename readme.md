# mindArc-Assessment

Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.

Answer:

Null values when outputted will display "NaN" in javascript and the toLowerCase() function will convert alphabetical characters to lowercase.

"NaN" concatenated with the above string and converted to lower case will output bananaa

('b' + 'a' + NaN + 'a' + 'a').toLowerCase() = bananaa
