Introduction
---
Thanks for taking the time to complete this frontend technical assessment. We will be focusing on software quality (scalability, readability, maintainability, etc.) and your eye for detail. You may include any libraries. Bonus points if SASS/LESS is used and jQuery is not used.

Exercise 1
---
Build a responsive page based on the designs.

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

##### Exercise outcome
* Created a responsive page matched with the design
* The page is responsive
  - The header image will be changed once the screen size is 701px or less (tablet/mobile screen)
  - The 3 columns align vertically on mobile screen
* SASS is used for styling

Exercise 2
---
Read the `data.json` file and display the data as tabs on desktop and an accordion on mobile.

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

##### Exercise outcome
* Created a demo page to display data read from the given json file (kindly note, the json has to be on server, for security reason the 'fetch' method won't work if the json file is in local folder)
* The page is responsive - it displays in tabs on desktop and in an accordion on Mobile
* Vanilla javascript was used to create html elements on load.
* CSS was used to style the demo Tab/Accordion and to control the hide/show of the panel.
* Re: 'Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.'
  - The "+ + 'a'" will result an error as NAN, so after the add operation, the string would become "baNANa". Then the '.toLowerCase()' transferred the string into lower case, so it becomes 'banana' at the end.
