$(document).ready(function () {
  resetTabla();
});

var silabas = ['me','tro','ca','sa','pe','roo','ciu','dad','le','tra'];

function resetTabla() {
  $("#silabas").empty();
  imprimeArrayTabla();
}

function ordenarPersonas() {
  agenda.sort(function (a, b) {
    var textoA = a.apellidos.toUpperCase();
    var textoB = b.apellidos.toUpperCase();
    return textoA.localeCompare(textoB);
  });
}

function imprimeArrayConsola() {
  var len = silabas.length;
  for (x = 0; x < len; x++) {
    console.log(silabas[x]);
  }
}

function imprimeArrayTabla() {
  var tabla = "<table class='table'>"
  silabas.sort(() => 0.5 - Math.random());
  var len = silabas.length;
  for (x = 0; x < len; x++) {
    y=x+1;
    tabla +=  "<tr><td><span id='drag-" + x + "' class='ui-widget-content'>" + silabas[x] + "</span></td><td><span id='drag-" + y + "' class='ui-widget-content'>" + silabas[y] + "</td></tr>";
    x+=1;
  }
  tabla += "</table>"
  $("#silabas").append(tabla);
  $( "[id^='drag-']" ).draggable({ snap: ".ui-widget-header" });
}
