Exercise 1

> Created a responsive web page that displays data in a tabbed layout on desktops and an accordion layout on mobile devices. 
> The header image will change based on the screen size, ensuring an optimized viewing experience for desktop and mobile view.
> Keyboard navigation is supported for tabs using Enter or Space key.


Exercise 2

- Desktop View (min-width: 768px): Data is shown in tabs.
- Mobile View (max-width: 767px): Data is shown in an accordion.
Key Features:

> Only one tab/accordion section is open at a time.
> The first tab/accordion section is open by default.
> Tabs are made focusable by adding tabIndex = 0.
> Keyboard navigation is supported for tabs using Enter or Space keys.



Banana Explained:

From the concatenation that happened from the expression, 

"'b' + 'a'" is simple string concatenation. It combines the characters 'b' and 'a' to form the string "ba". the second part which is the "+ 'a'" tries to convert the character 'a' to a number. Since 'a' isn't a valid number, JavaScript evaluates this as NaN or "Not a Number". Lastly, "a" is simply the character 'a' added as is. So putting it all together forms the string "baNaNa" then by considering the method "toLowerCase()"converts all characters in the string to lowercase, gets us the final string of "banana".