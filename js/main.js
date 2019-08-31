var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionItemHeading");
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
  accHD[i].setAttribute("id", "head" + i);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
}

(function() {
  "use strict";

  /**
   * tabs
   *
   * @description The Tabs component.
   * @param {Object} options The options hash
   */
  var tabs = function(options) {
    var el = document.querySelector(options.el);
    var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);

    var tabContentContainers = el.querySelectorAll(
      options.tabContentContainers
    );
    var activeIndex = 0;
    var initCalled = false;

    /**
     * init
     *
     * @description Initializes the component by removing the no-js class from
     *   the component, and attaching event listeners to each of the nav items.
     *   Returns nothing.
     */
    var init = function() {
      if (!initCalled) {
        initCalled = true;
        el.classList.remove("no-js");

        for (var i = 0; i < tabNavigationLinks.length; i++) {
          var link = tabNavigationLinks[i];
          tabNavigationLinks[i].setAttribute("id", "tab" + i);
          tabContentContainers[i].setAttribute("id", "tab-content" + i);
          handleClick(link, i);
        }
      }
    };

    /**
     * handleClick
     *
     * @description Handles click event listeners on each of the links in the
     *   tab navigation. Returns nothing.
     * @param {HTMLElement} link The link to listen for events on
     * @param {Number} index The index of that link
     */
    var handleClick = function(link, index) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        goToTab(index);
      });
    };

    /**
     * goToTab
     *
     * @description Goes to a specific tab based on index. Returns nothing.
     * @param {Number} index The index of the tab to go to
     */
    var goToTab = function(index) {
      if (
        index !== activeIndex &&
        index >= 0 &&
        index <= tabNavigationLinks.length
      ) {
        tabNavigationLinks[activeIndex].classList.remove("is-active");
        tabNavigationLinks[index].classList.add("is-active");
        tabContentContainers[activeIndex].classList.remove("is-active");
        tabContentContainers[index].classList.add("is-active");
        activeIndex = index;
      }
    };

    /**
     * Returns init and goToTab
     */
    return {
      init: init,
      goToTab: goToTab
    };
  };

  /**
   * Attach to global namespace
   */
  window.tabs = tabs;
})();
// End tabs.js

var myTabs1 = tabs({
  el: "#tabs1",
  tabNavigationLinks: ".tab-link",
  tabContentContainers: ".tab-content"
});

// Initialize Tabs
myTabs1.init();

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "data.json", true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function initJson() {
  loadJSON(function(response) {
    // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    for (var i = 0, l = actual_JSON.length; i < l; i++) {
      var obj = actual_JSON[i];
      //alert(obj.title);
      //fill in accordian

      document.getElementById("head" + i).innerHTML = obj.title;
      document.getElementById("head" + i).nextElementSibling.innerHTML =
        obj.content;

      document.getElementById("tab" + i).innerHTML = obj.title;
      document.getElementById("tab-content" + i).innerHTML = obj.content;
    }
  });
}

initJson();
