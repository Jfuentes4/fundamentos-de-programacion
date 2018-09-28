window.onload = function () {
  var btnCalcular = document.querySelector('#suma')
  btnCalcular.addEventListener('click', sumar)
  var btnRestar = document.querySelector('#resta')
  btnRestar.addEventListener('click', restar)
  var btnMultiplicar = document.querySelector('#multi')
  btnMultiplicar.addEventListener('click', multiplicar)
  var btnDividir = document.querySelector('#div')
  btnDividir.addEventListener('click', dividir)
  var btnResiduo = document.querySelector('#res')
  btnResiduo.addEventListener('click', residuo)
}

function sumar () {
  var num1 = Number(document.querySelector('#numero1').value)
  var num2 = Number(document.querySelector('#numero2').value)
  var inputResultado = document.querySelector('#result')
  var res = num1 + num2
  inputResultado.value = res
}
function restar () {
  var num1 = Number(document.querySelector('#numero1').value)
  var num2 = Number(document.querySelector('#numero2').value)
  var inputResultado = document.querySelector('#result')
  var res = num1 - num2
  inputResultado.value = res
}
function multiplicar () {
  var num1 = Number(document.querySelector('#numero1').value)
  var num2 = Number(document.querySelector('#numero2').value)
  var inputResultado = document.querySelector('#result')
  var res = num1 * num2
  inputResultado.value = res
}
function dividir () {
  var num1 = Number(document.querySelector('#numero1').value)
  var num2 = Number(document.querySelector('#numero2').value)
  var inputResultado = document.querySelector('#result')
  var res = num1 / num2
  inputResultado.value = res
}
function residuo () {
  var num1 = Number(document.querySelector('#numero1').value)
  var num2 = Number(document.querySelector('#numero2').value)
  var inputResultado = document.querySelector('#result')
  var res = num1 % num2
  inputResultado.value = res
}
