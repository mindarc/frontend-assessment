Introduction
---
Directory includes all exercises, assets used, and libraries. Some libraries that can be found on pages are CDNs since the downloaded versions caused conflicts with some stylings.

Technology
---
CSS
HTML
JavaScript
Bootstrap
jQuery (For Bootstrap only. Wasn't used in the codes)

Adjustments
---
Took me awhile to figure out why the Accordions and Tabs don't work. Seems it was because of the imported libraries.

Exercises are responsive in Browser's resizing behaviour, but isn't when you change the device through Developer Tools. I used Media Queries for this.

I use mostly jQuery in our office, so I don't really have much experience with Vanilla Javascript. Also learned it while doing the exercises.

Additional Files
---
app.event.js - For changing the device on Chrome Developer Tools as it's responsive when you resize the window but is having conflict with positioning when you change device.

app.template - To use templating for data.json

style.css - For global and custom classes.

Exercise 2
---
For Exercise 2, I encountered CORS error. I used to have a plugin for this but since Chrome updates, they don't work anymore. I tried to tweak Chrom flags but to no avail. I was able to finish this using Edge. If you encounter any trouble viewing it in Chrome, please use other browser instead.

I tried different extensions for this. My initial plan was to change the file type to js but opted to read it in its original file type.

###### Bonus points
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.
The reason for this is because you're adding a string to an empty block. Without quotations, the arithmetic operators expect a number to add. Since there's nothing to add to the string, it returns NaN which means Not A Number.

Last Say
---
I always do my best in everything that I do. I will never stop learning and I hope you can give me a chance to improve myself and skills in your company. My goal is to be a part of a company's success as often as possible.
