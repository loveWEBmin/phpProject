// JavaScript Document
var body = document.getElementsByTagName("body")[0];
var count = 0;
function backgroundChange(){
  "use strict";
  count=(count+1)%3+1;
  var img = "url(img/"+count+".jpg)";
  body.style.background=img;
  setTimeout("backgroundChange()","3000")
}
//backgroundChange();