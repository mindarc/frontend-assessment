var is_mobile = false;

var return_defaults = function() {
	document.getElementsByClassName('main-greeting')[0].style.fontSize = "3.5em";
	document.getElementsByClassName('greetings')[0].style.top = "35%";
	document.getElementsByClassName('banner-container')[0].src = "assets/images/desktop_banner.png";
}

var on_resize = function(event) {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		is_mobile = true;
    }

	if (is_mobile)  {
		document.getElementsByClassName('main-greeting')[0].style.fontSize = "3em";
		document.getElementsByClassName('greetings')[0].style.top = "33%";
		document.getElementsByClassName('banner-container')[0].src = "assets/images/mobile_banner.png";
	} else {
		return_defaults;
	}
};

window.onresize = on_resize;
window.onload = on_resize;