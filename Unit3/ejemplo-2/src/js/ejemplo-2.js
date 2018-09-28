
var btnCalcular = document.querySelector('#calcular')
btnCalcular.addEventListener('click', sumar)

function sumar () {
  var num1 = Number(document.querySelector('#numero1').value)
  var num2 = Number(document.querySelector('#numero2').value)
  var inputResultado = document.querySelector('#result')
  var res = num1 + num2
  inputResultado.value = res
}
