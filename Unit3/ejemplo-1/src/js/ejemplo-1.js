
window.onload = function () {
  /*
    JavaScript
    elementos basicos
  */
  var title = document.querySelector('h1')
  title.addEventListener('click', updateName)

  //    esto es una funcion
  function updateName () {
    var name = window.prompt('Nombre del jugador: ')
    title.textContent = 'jugador 1: ' + name
  }
}
