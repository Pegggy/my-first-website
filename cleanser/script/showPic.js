function addLoadEvent(func){
	var oldonload=window.onload;
	if (typeof window.onload !='function') {
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
    }
}

function insertAfer(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild== targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
function preparePlaceholder(){
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","img/sea.jpg");
	placeholder.setAttribute("alt","my soft cleanser");
	var description =document.createElement("p");
	description.setAttribute("id","description");
	var desctext =document.createTextNode("选择一款洗面奶~");
	description.appendChild(desctext);
	var gallery = document.getElementById("imagegallery");
	gallery.parentNode.insertBefore(placeholder,gallery);
	gallery.parentNode.insertBefore(description,gallery);
}
function prepareGallery(){
	if(!document.getElementByTagName)return false;
	if(!document.getElementById)return false;
	if(!document.getElementById("imagegallery"))return false;
	var gallery = document.getElementById("imagegallery");
	var links=document.getElementByTagName("a");
    for (var i = 0; i < links.length; i++) {
    	links[i].onclick=function(){
    		return showPic(this);
    	}
    	links[i].onkeypress = links[i].onclick;
    }
}
function showPic(whichpic){
	var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text =whichpic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
