let nav = document.getElementById('nav');
let menu = document.getElementById('links');
let openMenu = document.getElementById('open');
let buttons = document.getElementsByClassName('btn-header');
let closeMenu = true;
/*FUNCIÓN PARA QUE EL BOTÓN DE MENU SE HAGA CRUZ AL HACER CLICK*/
function myFunction(x){x.classList.toggle("change")}
function menus(){
    let desplazamiento_actual = window.pageYOffset;
    if (desplazamiento_actual <= 400) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
    }
}
function oppening(){
    if (closeMenu){
        menu.style.width = '50vw';
        closeMenu = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        closeMenu = true;    
    }
} 
window.addEventListener('scroll', function(){
    menus();
    console.log(window.pageYOffset);
});
window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});
window.addEventListener('resize', function(){
    if(screen.width >= 900){
        closeMenu = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
openMenu.addEventListener('click', function(){oppening();});

