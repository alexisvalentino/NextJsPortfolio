// Gestion du dark-mode 
let toggleMode = document.querySelector('.toggle-mode')
let arrow = document.querySelector('.arrow')
let body = document.querySelector('body')
let headerImg = document.querySelector('.header-img')
let navigationLogo = document.querySelectorAll('.navigation-logo')
let navigationMenu = document.querySelector('.navigation-menu')
let aboutTtile = document.querySelector('.about-title')
let aboutAbout = document.querySelector('.about-about')
let aboutHobbiesH3 = document.querySelector('.about-hobbies h3')
let educationCardsTitle1 = document.querySelector('.education-cards-title h1')
let educationCardsTitle2 = document.querySelector('.education-cards-title h2')
let skillestCardsTitle1 = document.querySelector('.skillest-cards-title h1')
let skillestCardsTitle2 = document.querySelector('.skillest-cards-title h2')
toggleMode.addEventListener('click', () => {
    arrow.classList.toggle('active')
    toggleMode.classList.toggle('active')
    body.classList.toggle('active')
    if (body.classList.contains('active')) {
        headerImg.innerHTML = '<img src="img/ln3.png" alt="">'
    } else {
        headerImg.innerHTML = '<img src="img/ln.png" alt="">'
    }
    navigationLogo.forEach(element => {
        element.classList.toggle('active-mode')
    });
    navigationMenu.classList.toggle('active-mode')
    aboutTtile.classList.toggle('active')
    aboutAbout.classList.toggle('active')
    aboutHobbiesH3.classList.toggle('active')
    educationCardsTitle1.classList.toggle('active')
    educationCardsTitle2.classList.toggle('active')
    skillestCardsTitle1.classList.toggle('active')
    skillestCardsTitle2.classList.toggle('active')
})

// Menu burger
let navBurger = document.querySelector('.navigation-burger');
let navMenu = document.querySelector('.navigation-menu');

navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('active');
    if(navBurger.classList.contains('active')){
        navMenu.classList.add('active');
    }else{
        navMenu.classList.remove('active');
    }
})

// Boutton remonter en haut
window.addEventListener('scroll', (e)=>{
    let arrow = document.querySelector('.arrow');
    arrow.classList.toggle('arrow-hidde', window.scrollY > (screen.height) / 2);
})
