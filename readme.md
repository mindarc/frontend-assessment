Project is based on Angular and completed both exercises as per the requirements.
The following two Folders contains the code. In the folder there is a file called package.json which has all the
info about dependencies to run the project.

  1. mindarc-exercise-1-jyoti
  2. mindarc-exercise-2-jyoti


Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana

The first 'b' and 'a' get added up as 'ba'. With the second 'a' has a double plus sign,
the first one is for addition, the second one is in order to convert a string to a number using the unary plus
operator. Because 'a' is not a number, the result is NaN (Not a Number).

First, we get the value of the bracket expression and then apply it on the result toLowerCase() function.

baNaNa which is lowercased into “banana”
