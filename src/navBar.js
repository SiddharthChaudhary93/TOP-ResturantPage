const navBar = document.querySelector('#main');
const header = document.querySelector('header');
const content = document.querySelector('main');
const topOfNav = header.offsetHeight ;

function makeNav(){
    console.log(navBar.offsetHeight);
    if(window.scrollY > topOfNav){
        content.style.paddingTop = navBar.offsetHeight + topOfNav + 'px';
        navBar.classList.remove('main');
        navBar.classList.add('main-fixed');
    }
    else{
        content.style.paddingTop = 0;
        navBar.classList.add('main');
        navBar.classList.remove('main-fixed');
    }
}
window.addEventListener('scroll',makeNav);
