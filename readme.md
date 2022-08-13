Introduction
---
Hello. Thanks for letting me have this excercise. Please follow below instructions to setup the project.


## Project Setup

```sh
cd excercises
npm install
npm run dev
npm run lint
```

## Navigation
Excercise 2 is located in the `/about` page. You may also click the `READ MORE` button in the `Cards List` on the Home page to get redirected.

## Asnwer to
``` sh
Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.
```
- `++'a'` is being converted to a number (which is not possible), so it returns `NaN`. Add it to the string and it becomes `banana`.