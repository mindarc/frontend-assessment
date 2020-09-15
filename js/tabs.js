function initTabs() {
   document.querySelectorAll('.tabs__button').forEach((button) => {
      button.addEventListener('click', () => tabClick(button));
   });
}

function tabClick(srcButton) {
   const sideBar = srcButton.parentElement;
   const tabsContainer = sideBar.parentElement;
   const tabNumber = srcButton.dataset.forTab;
   const tabToActivate = tabsContainer.querySelector(
      `.tabs__content[data-tab="${tabNumber}"]`
   );

   // Remove active classes from all buttons and tabs
   document.querySelectorAll('.tabs__button').forEach((button) => {
      button.classList.remove('tabs__button--active');
   });

   document.querySelectorAll('.tabs__content').forEach((button) => {
      button.classList.remove('tabs__content--active');
   });

   srcButton.classList.add('tabs__button--active');
   tabToActivate.classList.add('tabs__content--active');
}

document.addEventListener('DOMContentLoaded', () => {
   readTextFile("../data.json", function (text) {

      const tabs = document.querySelector('.tabs');
      const data = JSON.parse(text);

      // Generate HTML content based of JSON data
      tabs.innerHTML = `
         <div class="tabs__sidebar">

            ${data.reduce((prev, tab, index) => prev + `

               <button class="tabs__button" data-for-tab="${index + 1}">${tab.title}</button>

            `, '')}
            
         </div>


         ${data.reduce((prev, tab, index) => prev + `

            <div class="tabs__content" data-tab="${index + 1}">
               <h2 class="tabs__content__header">${tab.title}</h2>
               <p>
               ${tab.content}
               </p>
            </div>

         `, '')}
      `

      // Find first button
      const firstButton = document.querySelector('.tabs__button');

      // Init event listeners
      initTabs();

      firstButton.click();
   });

   
});


