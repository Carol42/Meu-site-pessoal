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