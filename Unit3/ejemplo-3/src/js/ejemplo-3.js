
var btnCalcular = document.querySelector('#btnEvaluar')
var pResultado = document.querySelector('#resultado')
var opciones = document.querySelector('#opciones')
var inputNumero = document.querySelector('#numero1')
btnCalcular.addEventListener('click', evaluarNumero)
opciones.addEventListener('change', evalOpcion)

function evalOpcion () {
  var numero = Number(inputNumero.value)
  var opcion = opciones.value

  if (opcion === 'mitad') {
    pResultado.textContent = 'La mitad es ' + (numero / 2)
  } else if (opcion === 'cuadrado') {
    pResultado.textContent = 'La mitad es ' + Math.pow(numero, 2)
  } else if (opcion === 'cubo') {
    pResultado.textContent = 'La mitad es ' + Math.pow(numero, 3)
  } else if (opcion === 'par') {
    if (numero % 2 === 0) {
      pResultado.textContent = 'El numero es par'
    } else {
      pResultado.textContent = 'El numero es impar'
    }
  } else {
    pResultado.textContent = ''
  }
}

function evaluarNumero () {
  var numero = Number(inputNumero.value)

  if (numero > 0) {
    pResultado.textContent = 'El numero ' + numero + ' es positivo'
  } else if (numero === 0) {
    pResultado.textContent = 'El numero ' + numero + ' es 0'
  } else {
    pResultado.textContent = 'El numero ' + numero + ' es negativo'
  }
}
