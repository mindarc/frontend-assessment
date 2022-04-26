const URL = "https://raw.githubusercontent.com/mindarc/frontend-assessment/master/data.json";
const jsonData = 4;

//below is the code that reads data.json into html elements
fetch(URL)
.then(function (response) {
    return response.json();
})
.then(function (data) {

    for(let i = 0; i < jsonData; i++ ){
        document.getElementById("section" + i +"Title").innerHTML = data[i].title;
        document.getElementById("section" + i + "Content").innerHTML = data[i].content;
        document.getElementById("aSection" + i +"Title").innerHTML = data[i].title;
        document.getElementById("aSection" + i + "Content").innerHTML = data[i].content;
    }
});