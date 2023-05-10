const burger = document.querySelector('#menu__burger');
const xMark = document.querySelector('#menu__xmark')
const menu = document.querySelector('.menu__nav');
const closeContent = document.querySelector('.close-content')

const openMenu = function(){
    if(burger.style.display == 'none'){
        burger.style.display = 'block';
        closeContent.style.display = 'block';
        xMark.style.display = 'none';
    }else {
        burger.style.display = 'none';
        xMark.style.display = 'block';
        closeContent.style.display = 'none';
    }

  menu.classList.toggle('show-menu');
 

}
burger.addEventListener('click', function() {
    openMenu();
});


xMark.addEventListener('click', function(){
    openMenu();
})

