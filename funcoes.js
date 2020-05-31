function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const eu = document.querySelector('.site-subtitle');
typeWrite(eu);

function showMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

function hideMenu(){
  var x = document.getElementById("myLinks");
  x.style.display = "none";
}



mybutton = document.getElementById("topButton");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
} 

var modal = document.getElementById('zoomImage');
var img = $('.fotos');
var modalImg = $("#img01");
$('.fotos').click(function(){
  modal.style.display = "block";
  var newSrc = this.src;
  modalImg.attr('src', newSrc);
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
};

var modal = document.getElementById('zoomImage');

