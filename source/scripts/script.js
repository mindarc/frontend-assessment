window.onresize = () => { window.location.reload()}
const mediaQuery = window.matchMedia('(min-width: 576px)');

fetch('https://raw.githubusercontent.com/mindarc/frontend-assessment/master/data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
});
function appendData(data) {
    if (mediaQuery.matches) {
    let tabContainer = document.getElementById("tabData");
        for (let i = 0; i < data.length; i++) {
            let tabBtn = document.createElement("button");
            let tabValue = document.getElementById("tab"+i)
            Element.prototype.setAttributes = function(tabBtn){
                for(let prop in tabBtn) {
                    this.setAttribute(prop, tabBtn[prop])
                }
            }
            Element.prototype.setAttributes = function(tabBtn){
                for (let prop in tabBtn) { this.setAttribute(prop, tabBtn[prop]) }
            }
            if (i == 0) {
                tabBtn.setAttributes({"class": "nav-link active tab--active my-1 py-2", "data-bs-toggle": "tab", "data-bs-target": "#tab" + i,"type": "button", "role": "tab"})
            }
            else {
                tabBtn.setAttributes({"class": "nav-link my-1 py-2", "data-bs-toggle": "tab", "data-bs-target": "#tab" + i,"type": "button", "role": "tab"})
            }
            tabBtn.innerHTML = data[i].title;
            tabValue.innerHTML = data[i].content;
            tabContainer.appendChild(tabBtn);
        }

    }
    else {
        
        for (let i = 0; i < data.length; i++) {
            let accordionValue = document.getElementById("collapseValue"+i)
            let accordionTitle = document.getElementById("collapseButton"+i);
            // let accordionValue = document.getElementById("");
            accordionTitle.innerHTML = data[i].title;
            accordionValue.innerHTML = data[i].content;

        }
    }
}