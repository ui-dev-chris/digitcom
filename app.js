const btnToggle = document.querySelector('.btn-menu');
const menu = document.querySelector('header .menu');


btnToggle.addEventListener('click', () =>{
    menu.classList.toggle('toggle');
} );