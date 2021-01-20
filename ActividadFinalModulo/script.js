$(document).ready( function(){
  $("nav ul li").hover(function(){
    if ($("> ul", this).length > 0) {
        $("> ul", this).show();
    }
  }, function(){
    if ($("> ul", this).length > 0) {
        $("> ul", this).hide();
    }
  });
  $("#botonGaleria").click(function(){
    imprimeGaleria();
  });
  $("#botonInicio").click(function(){
    irInicio();
  });
  irInicio();
});

function imprimeGaleria() {
  $("#cuerpo").empty();
  var imagenes = ["img/colorado.jpg","img/monte-vista.jpg","img/colorado-colors.jpg"]
  var listaImagenes = "<ul id='galeria'>"
  for (i=0;i<imagenes.length;i++){
    j = i+1;
    listaImagenes += "<li class='ml-4 mt-4'><div class='box' id='box-" + j + "'><img id='img-" + j + "' src='" + imagenes[i] + "'><div id='popup-" + j + "' class='popup'><p>Imagen " + j + "<p></div></div><div id='myModal-" + j + "' class='modal'><span class='close'>&times;</span><img class='modal-content img-responsive' id='img0"+ j + "' src='' style='height:500px; width:100%;'></div></li>"
  }
  listaImagenes += "</ul>"
  $("#cuerpo").append(listaImagenes);
  $( "[id^='box-']" ).click(function(){
    $(".popup").hide();
    $(this).siblings("[id^='myModal-']").modal({backdrop: 'static', keyboard: false});
    $(this).siblings("[id^='myModal-']").children("[id^='img0']").attr('src', $(this).children("[id^='img-']").attr('src'));
  });
  $(".close").click(function(){
    $( "[id^='myModal-']" ).modal('hide');
  });
  var boxHovered, selector, targetedBox, adjustX, adjustY;
  $(".popup").hide();
  $(".box").hover(function(){
		 boxHovered = $(this).attr("id");
		 targetedBox = "#" + boxHovered;
     selector = "#popup-"+ boxHovered.charAt(boxHovered.length-1);
		 $(selector).show();
		 moveBox();
	},function(){
		 $(selector).hide();
	});
  	function moveBox(){
		$(targetedBox).bind('mousemove',function(event){
			adjustX = $(this).find(".popup").outerWidth(true);
			adjustY = $(this).find(".popup").outerHeight(true);
			var my = event.pageY-$(this).offset().top-adjustY;
			var mx = event.pageX-$(this).offset().left-adjustX;
			$(selector).css({
				"left":mx,
				"top":my
			});
	  });
  }
}

function iniciaCoord() {
  $('body,html').mousemove(function(event){
    var relX = event.pageX - $(this).offset().left;
    var relY = event.pageY - $(this).offset().top;
    var relBoxCoords = "" + relX + "," + relY + "";
    $(".mouse-cords").text(relBoxCoords);
  });
}

function irInicio() {
  $("#cuerpo").empty();
  var index = "<p class='mt-4'>Las coordenadas actuales del cursor son: <strong class='mouse-cords'></strong></p>";
  $("#cuerpo").append(index);
  iniciaCoord();
}
