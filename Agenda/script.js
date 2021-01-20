$(document).ready(function () {
  imprimeArrayTabla();
  $("#addBoton").click(function () {
    addPersona();
    localStorage.setItem("savedAgenda", JSON.stringify(agenda));
    //imprimeArrayConsola();
    resetTabla();
  });
  $("#delStorage").click(function () {
    borraStorage();
    resetTabla();
  });
});

if (localStorage.getItem("savedAgenda") === null) {
  var agenda = [];
} else {
  var agenda = JSON.parse(localStorage.getItem("savedAgenda"));
}

function addPersona() {
  if (checkValues()) {
    alert('Some fields are empty');
  } else {
    var persona = {
      nombre: $("#formGroupInput1").val(),
      apellidos: $("#formGroupInput2").val(),
      tlf: $("#formGroupInput3").val(),
    };
    agenda.push(persona);
    ordenarPersonas();
    $(".form-control").val("");
  }
}

function checkValues() {
  var isEmpty = true;
  $('input').each(function() {
        if(!$(this).val() == null || !$(this).val() == '') {
          isEmpty = false;
        }
  });
  return isEmpty;
}

function resetTabla() {
  $("#agenda").empty();
  imprimeArrayTabla();
}

function borraStorage() {
  agenda = [];
  localStorage.removeItem("savedAgenda");
}

function ordenarPersonas() {
  agenda.sort(function (a, b) {
    var textoA = a.apellidos.toUpperCase();
    var textoB = b.apellidos.toUpperCase();
    return textoA.localeCompare(textoB);
  });
}

function imprimeArrayConsola() {
  var len = agenda.length;
  for (x = 0; x < len; x++) {
    console.log(agenda[x]);
  }
}

function imprimeArrayTabla() {
  var tabla = "<table class='table'><thead class='thead-dark'><tr><th scope='col'>#</th><th scope='col'>Nombre</th><th scope='col'>Apellidos</th><th scope='col'>Teléfono</th></tr></thead><tbody>"
  var len = agenda.length;
  for (x = 0; x < len; x++) {
    var i = x+1;
    tabla +=  "<tr><th scope='row'>" + i + "</th><td>" + agenda[x].nombre + "</td><td>" + agenda[x].apellidos + "</td><td>" + agenda[x].tlf + "</td></tr>";
  }
  tabla += "</table>"
  $("#agenda").append(tabla);
}
