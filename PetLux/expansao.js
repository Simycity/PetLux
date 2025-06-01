//Expande o menu
var btnExp = document.querySelector('#btn-exp')
var menu = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menu.classList.toggle('expandir')
})