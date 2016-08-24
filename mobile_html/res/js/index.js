// JavaScript Document
function init(){
	var winW=document.documentElementWidth;
	var winH=document.documentElementHeight;
	var bg=document.getElementById("bg");
	var allH=document.documentElement.scrollHeight;
	if(allH<winH){
		bg.style.height=winH+"px";
	}else{
		bg.style.height=allH+"px";
	}
}