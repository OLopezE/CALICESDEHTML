//window.onload = function(){
//	document.getElementById('derecha').onclick = function(){
//		alert('que pedo alaverga');
//	}
//}

var slideIndex = 1;
showDivs(slideIndex);

document.getElementById('siguiente').onclick = function(){
  slideIndex+=1;
  showDivs(slideIndex);
}
document.getElementById('anterior').onclick = function(){
  slideIndex-=1;
  showDivs(slideIndex);
}


function showDivs(n) {
  
  //variable x = fotos, variable y = texto z = titulo (Esto es para la prueba, con imagenes y texto hardcodeado, ver como sacarlo de un query)
  var x = document.getElementsByClassName("SlideShow");
  var y = document.getElementsByClassName("testo");
  var z = document.getElementsByClassName("titulo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
    z[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  y[slideIndex-1].style.display = "block";
  z[slideIndex-1].style.display = "block";
}