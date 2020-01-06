//window.onload = function(){
//	document.getElementById('derecha').onclick = function(){
//		alert('que pedo alaverga');
//	}
//}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  
  //variable x = fotos, variable y = texto (Investigar como casarloss)
  var x = document.getElementsByClassName("SlideShow");
  var y = document.getElementById("Texto");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}