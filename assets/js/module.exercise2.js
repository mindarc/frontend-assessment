function read_data(callback) {
    var data = new XMLHttpRequest();

    data.overrideMimeType("application/json");
    data.open('GET', 'data.json', true);

    data.onreadystatechange = function() {
        if (data.readyState == 4 && data.status == "200") {
            callback(data.responseText);
        }
    }

    data.send(null);
}

read_data(function(response) {
    final_data = JSON.parse(response);
   

	var template 		  = tabs_acc_template,
		contents_template = content_template;
	
	var html = "", html1 = "";

	for (var key in final_data) {
	  	html  += template.replace(/{{title}}/g, final_data[key].title)
	                    .replace(/{{ctr}}/g, parseInt(key)+1)
	                    .replace(/{{active}}/g, (key==0 ? "active" : ""))

	    html1 += contents_template.replace(/{{content}}/g, final_data[key].content)
	    				.replace(/{{title}}/g, final_data[key].title)
	    				.replace(/{{ctr}}/g, parseInt(key)+1)
	    				.replace(/{{active}}/g, (key==0 ? "active" : ""))
	    				.replace(/{{in}}/g, (key==0 ? "in" : ""))
	}

	document.getElementById("tabs-acc-container").innerHTML = html;
	document.getElementById("tabs-content-container").innerHTML = html1;
});