document.querySelectorAll('.nav_decoration').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
})

let hamburger = document.querySelector('.hamburger_icon');
let menu = document.querySelector('.navbar_flexbox');
let bod = document.querySelector('.nav_container');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});