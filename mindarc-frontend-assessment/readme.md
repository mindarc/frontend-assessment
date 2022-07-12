Introduction
---
Thanks for taking the time to complete this frontend technical assessment. We will be focusing on software quality (scalability, readability, maintainability, etc.) and your eye for detail. You may include any libraries, but Vue.js is preferred and jQuery is not recommended. Along with following best practices, bonus points for following our [coding guidelines](https://github.com/mindarc/frontend-assessment/wiki/Coding-guidelines). 

Hello MindArc team, thank you for the opportunity and for taking the time to review my application. 

Exercise 1
---
Build a responsive page based on the designs.

I built the page with Next.js and used Bootstrap to create the responsive design according to the requirements. 

##### Requirements
1. Match the designs exactly.
2. Needs to be responsive.

##### Designs
* exercise1-desktop.png
* exercise1-mobile.png

##### Assets
* Desktop banner - http://via.placeholder.com/1920x650
* Mobile banner - http://via.placeholder.com/600x600
* Content images - http://via.placeholder.com/400x300

Exercise 2
---
Read the `data.json` file and display the data as tabs on desktop and an accordion on mobile.
I built the page with Next.js and used Bootstrap for the responsive design. I implemented CSS and GSAP animation and custome CSS styling to improve UX.
I added a new property "id" to "data.json" to easily identify the object.

##### Requirements
1. Display data in tabs on desktop.
2. Display data in an accordion on mobile.
3. Only 1 accordion/tab should be open at a time.
4. Open the first accordion/tab on load.
5. If the open accordion is selected, close it.

###### Bonus points
* Improve the user experience with meaningful animations/transitions.
* Design and styling.
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.
Explanation:
+'a' resolves to NaN ("Not a Number") because (+'a') attempts to convert 'a' to a number using the unary plus operator.
Adding NaN to "ba" turns NaN into the string "NaN" because of type conversion, gives baNaN. And then there is an "a" behind, giving baNaNa.
Finally, it's lowercased.


Submission
---
We recommend submitting your completed assessment as a forked repository. Please replace README content with instructions and relevant documentation.
