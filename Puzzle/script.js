$(document).ready(function () {
  colocarPiezas();
  $("#resetBoton").click(function () {
    resetPuzzle();
  });
  $( "[id^='drop-']" ).droppable({
    drop: function(event, ui) {
      var dragId = $(ui.draggable).attr('id');
      var dropId = $(this).attr('id');
      checkResultado(dragId, dropId);
    }
  });
});

var piezas = ['img/image_part_001.jpg', 'img/image_part_002.jpg', 'img/image_part_003.jpg', 'img/image_part_004.jpg', 'img/image_part_005.jpg', 'img/image_part_006.jpg', 'img/image_part_007.jpg', 'img/image_part_008.jpg', 'img/image_part_009.jpg']
var contador = 0;
var aciertos = 0;

function colocarPiezas() {
  var maq = ""
  piezas.sort(() => 0.5 - Math.random());
  var len = piezas.length;
  for (x = 0; x < len; x++) {
    //var drag = piezas[x].charAt(piezas[x].length-5);
    maq += "<div id='drag-" + piezas[x].charAt(piezas[x].length-5) + "' class='col-sm-4 border pos ui-widget-content'><img src='" + piezas[x] + "' class='img-fluid'></div>";
    //console.log(piezas[x]);
  }
  $("#piezas").append(maq);
  $( "[id^='drag-']" ).draggable({ snap: ".ui-widget-header", snapMode: "inner" });
  //console.log(piezas);
}

function resetPuzzle() {
  $("#piezas").empty();
  colocarPiezas();
}

function checkResultado(x,y) {
  if (contador < 8) {
    contador +=1 ;
    if (x.charAt(x.length-1) == y.charAt(y.length-1)){
      aciertos += 1;
      //console.log(aciertos);
    }
    //console.log(contador);
    } else {
      if (aciertos == 8) {
        alert('Enhorabuena');
        contador=0;
        aciertos=0;
      } else {
        alert('Intentalo de nuevo');
        contador=0;
        aciertos=0;
    }
  }
}
