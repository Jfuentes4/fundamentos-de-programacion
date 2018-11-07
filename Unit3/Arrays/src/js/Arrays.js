var cumuloDeNumerosRandomQueElUsusarioIngreso = []

window.onclick = function () {
  document.getElementById('btn1').addEventListener('click', rellenar)
}

function rellenar () {
  var size = Number(document.getElementById('numero').value)
  var tabla = document.getElementById('resultado')
  for (var i = 0; i < size; i++) {
    var numero = Number(window.prompt('ingresa un numero'))
    cumuloDeNumerosRandomQueElUsusarioIngreso.push(numero)
    tabla.innerHTML += '<tr><td>' + (cumuloDeNumerosRandomQueElUsusarioIngreso.length - 1) + '</td><td>' + numero + '</td></tr>'
  }

  cumuloDeNumerosRandomQueElUsusarioIngreso.forEach(function (x) { tabla.innerHTML += '<tr><td>' + x + '</td></tr>' })
}
