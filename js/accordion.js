let prevValue = 1;
function initAccordion() {
   /* 
      The accordion I've created is mainly CSS Only,
      but as of the assessment's requirement for closing on self click, 
      I've had to implement some javascript action
   */

   // Fetch all inputs
   const radios = document.getElementsByTagName('input');

   // Add self click condition to all radios
   Array.from(radios).map((radio) => {
      radio.addEventListener('click', () => {

         /* 
            I was unable to use a simple uncheck if checked function,
            because the event occurs after a value has been registered.

            So implemented this method that relies on a variable
         */

         if (radio.value == prevValue) {
            // Reset previously selected option
            prevValue = 0;
            radio.checked = false;
         } else {
            prevValue = radio.value;
         }      
      })
   })
}

document.addEventListener('DOMContentLoaded', () => {
   readTextFile("../data.json", function (text) {

      const accordion = document.querySelector('.accordion');
      const data = JSON.parse(text);

      // Generate HTML content based of JSON data
      accordion.innerHTML = `
         ${data.reduce((prev, item, index) => prev + `
            <div>
               <input type="radio" value="${index + 1}" name="example_accordion" id="section${index + 1}" class="accordion__input" />
               <label for="section${index + 1}" class="accordion__label">${item.title}</label>
               <div class="accordion__content">
                  <p>${item.title}</p>
                  <p>
                     ${item.content}
                  </p>
               </div>
            </div>
         `, '')}
      `

      // Init event listeners
      initAccordion();

      // Find first input
      const firstInput = document.querySelector('.accordion__input');

      firstInput.checked = true;
   });
   
});