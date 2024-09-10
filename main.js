const nav = document.querySelector('.navigation')

let previousposition = window.scrollY;
window.onscroll = function () {
    let actualposition = window.scrollY;
    if(previousposition < actualposition) {
        nav.style.top = '-100px';
    } else {
        nav.style.top = '0';
    }
    previousposition=actualposition
};

const main = document.querySelector('main');

const backgroundImages = [
    'url("wallpaper.png")',
    'url("wallpaper2.png")',
    'url("wallpaper3.png")',
];

let currentIndex = 0;

function changeBackground() {
    main.style.backgroundImage = backgroundImages[currentIndex];
    currentIndex++;

    if (currentIndex === backgroundImages.length) {
        currentIndex = 0;
    }
}

setInterval(changeBackground, 10000);

changeBackground();