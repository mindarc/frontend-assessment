const xhttp = new XMLHttpRequest();

// DOM ELEMENTS

const tab1 = document.querySelector("#btn-1");
const tab2 = document.querySelector("#btn-2");
const tab3 = document.querySelector("#btn-3");
const tab4 = document.querySelector("#btn-4");
// const divs = document.querySelectorAll(".data");

// Event listeners

tab1.addEventListener("click", function(e) {
  e.target.value = 0;
  json(e);
  // Hide Div
  tab2.nextElementSibling.style.maxHeight = null;
  tab3.nextElementSibling.style.maxHeight = null;
  tab4.nextElementSibling.style.maxHeight = null;
  animation(e);
});

tab2.addEventListener("click", function(e) {
  e.target.value = 1;
  json(e);
  tab1.nextElementSibling.style.maxHeight = null;
  tab3.nextElementSibling.style.maxHeight = null;
  tab4.nextElementSibling.style.maxHeight = null;
  animation(e);
});

tab3.addEventListener("click", function(e) {
  e.target.value = 2;
  json(e);
  tab2.nextElementSibling.style.maxHeight = null;
  tab1.nextElementSibling.style.maxHeight = null;
  tab4.nextElementSibling.style.maxHeight = null;
  animation(e);
});

tab4.addEventListener("click", function(e) {
  e.target.value = 3;
  // Hide other divs
  json(e);
  tab2.nextElementSibling.style.maxHeight = null;
  tab3.nextElementSibling.style.maxHeight = null;
  tab1.nextElementSibling.style.maxHeight = null;
  animation(e);
});

// Read and display data from the JSON file

function json(e) {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    // Create an object
    let myObj = JSON.parse(xhttp.responseText);
    // Loop through object
    for (let i = 0; i < myObj.length; i++) {
      // Choose the h1 of the target element and set the title
      e.target.nextElementSibling.firstElementChild.innerHTML =
        myObj[e.target.value].title;
      // Choose the p of the target element and set the content
      e.target.nextElementSibling.lastElementChild.innerHTML =
        myObj[e.target.value].content;
    }
  }
}

// Animation function
function animation(e) {
  let panel = e.target.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

// Onload function

xhttp.onload = function() {
  let myObj = JSON.parse(xhttp.responseText);
  let panel = tab1.nextElementSibling;
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.querySelector(".title").innerHTML = myObj[0].title;
    document.querySelector(".p").innerHTML = myObj[0].content;
    tab1.nextElementSibling.style.maxHeight = panel.scrollHeight + "px";
  }
};

xhttp.open("GET", "../data.json", true);
xhttp.send();
