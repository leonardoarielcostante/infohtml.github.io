const hamburger = document.querySelector('.icono')
const menu = document.querySelector('.navbar')

hamburger.addEventListener('click',  ()=>{
  menu.classList.toggle('spread')
})


window.addEventListener('click', e => {
  if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger){

        menu.classList.toggle('spread')

      }
})