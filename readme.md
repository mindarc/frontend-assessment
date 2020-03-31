###### Install Sass
There are several ways to install Sass in your local machine. Here are some ways
---
Via App

1. CodeKit (Paid) Mac
2. Compass.app (Paid, Open Source) Mac Windows Linux
3. Ghostlab (Paid) Mac Windows
4. Hammer (Paid) Mac
5. Koala (Open Source) Mac Windows Linux
6. LiveReload (Paid, Open Source) Mac Windows
7. Prepros (Paid) Mac Windows Linux
8. Scout-App (Free, Open Source) Windows Linux Mac

Via Standalone

Download the package [here](https://github.com/sass/dart-sass/releases/tag/1.26.3)
and add it to your PATH

Via npm
`npm install -g sass`

Via brew
`brew install sass/sass/sass`

###### Check Sass Version
```
	sass --version
```

You can also use `sass --help` for more info about CLI.

###### Compile Sass
```
	sass --watch input-file:output-file
```
For guide, [see this link](https://sass-lang.com/guide)


###### Web Pages

Exercise 1
---
Responsive page that shows full-width header and has 3 columns. Sass is used for the design. It has different views for desktop and mobile.

Exercise 2
---
Responsive page that retrieves data from `data.json` and displays it in tab if desktop and in accordion if mobile. Design is derived from Excercise 1 and it also includes explanation why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.