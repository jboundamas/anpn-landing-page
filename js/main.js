function iconHover() {
	var image3 = document.getElementById("plan-icon");
	var link3 = document.getElementById("applicationLink");

	if (!("ontouchstart" in document.documentElement) && 
		! (navigator.maxTouchPoints > 0) &&
		! (navigator.msMaxTouchPoints > 0) ){

	link3.addEventListener("mouseover", function(){
		if (window.location.hash == "#l=en") {
			image3.src="img/coming-soon-icon.svg";
		}
		else {
			image3.src="img/a-venir-icon.svg"
		}
	}, false);
	link3.addEventListener("mouseout", function(){
		image3.src="img/plan-icon.svg";}, false);
	};   
};

//Set language and update URL hash
function langtoggle(l){

	if (l == 'en' ){
		local_lang = lang.en,
		window.location.hash = "#l=en";
	}

	else if (l == 'fr') {
		local_lang = lang.fr,
		window.location.hash = "#l=fr";
	}	

	for(var key in local_lang) {
		document.getElementById(key).innerHTML = local_lang[key];
	}
}

//Check URL hash; set appropriate page language.
function loadLanguage() {

	var domain = window.location.origin.split(".")[1];
	var hash = window.location.hash;

	if (hash == '#l=en' || (hash == '' && domain == 'forest-atlas')) {
		langtoggle('en')
	}
	else {
		langtoggle('fr')
	}
}

//Generate flag link/image from country JS file
function generateFlag() {

	var flagContainer = document.getElementById('flag');

	var newLink = document.createElement('a');
	var newImg = document.createElement('img');

	newLink.href = flag["href"];
	newImg.setAttribute('src',flag["src"]);
	newImg.className += " img-responsive";

	newLink.appendChild(newImg);
	flagContainer.appendChild(newLink);
}

//Generate background image from country JS file
function generateBcgImg() {
document.getElementById('intro').style.background = bcgImage["src"];
}

//Generate partner logos from country JS file
function generatePartnerLogos() {

	var logoContainer = document.getElementById('PartnerLogos');

	for(var key in partners) 
	{
		var partner = partners[key];
		var newDiv = document.createElement('div');
		var newLink = document.createElement('a');
		var newImg = document.createElement('img');
		newDiv.setAttribute('id',key);
		newDiv.className += "col-xs-6" + " col-md-4" + " col-lg-3";
		newLink.href = partner["href"];
		newImg.className += " img-responsive";
		newImg.setAttribute('src',partner["src"]);
		newImg.setAttribute('alt',partner["alt"]);

		newLink.appendChild(newImg);
		newDiv.appendChild(newLink);
		logoContainer.appendChild(newDiv);
	}
}

//Generate app logos from country JS file
function generateAppLogos() {

	var appLogoContainer = document.getElementById('AppLogos');

	for(var key in apps) 
	{
		var app = apps[key];
		var newDiv = document.createElement('div');
		var newLink = document.createElement('a');
		var newImg = document.createElement('img');
		newDiv.setAttribute('id',key);
		newDiv.className += "col-xs-6" + " col-lg-3" + " appIcon";
		newLink.href = app["href"];
		newLink.target = "_blank";
		newImg.className += " img-responsive";
		newImg.setAttribute('src',app["src"]);
		newImg.setAttribute('alt',app["alt"]);
		
		newLink.appendChild(newImg);
		newDiv.appendChild(newLink);
		appLogoContainer.appendChild(newDiv);

		//Trigger hover events
		newImg.addEventListener("mouseover", function(){
			var divSource = $(this).closest('div').attr('id');
			this.setAttribute('src', apps[divSource]["srcActive"])}, false);

		newImg.addEventListener("mouseout", function(){
			var divSource = $(this).closest('div').attr('id');
			this.setAttribute('src', apps[divSource]["src"])}, false);;
}
};

window.addEventListener("DOMContentLoaded", function() {
	loadLanguage();
	generateFlag();
	generateBcgImg();
	iconHover();
	generatePartnerLogos();
	generateAppLogos();
}, false);

SocialShareKit.init();