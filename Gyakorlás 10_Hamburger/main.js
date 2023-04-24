const menubtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menubtn.addEventListener('click', OpenMenu);

function OpenMenu(){
  menubtn.classList.toggle('clicked');
  menu.classList.toggle('open');
}