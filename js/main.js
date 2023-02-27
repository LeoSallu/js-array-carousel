'use strict'
//Array img
const img = ['01.webp', '02.webp','03.webp', '04.webp', '05.webp'];

let imgCarousel = '';
let imgShow = 0;
const carosello = document.querySelector('.carousel');

// ciclo for 
for (let i = 0 ; i < img.length; i++ ){
    console.log(img[i]);
    imgCarousel += `<div class="item"><img src="img/${img[i]}" alt="spiderman"></div>`
}
//inserimento item nel html
carosello.innerHTML= carosello.innerHTML + imgCarousel;
document.querySelector('.item').classList.add('show');
//costanti chevron
const upImg = document.querySelector('.up');
const botImg = document.querySelector('.bot');
const imgsCarousel = document.querySelectorAll('.item');
//inserimento evento chevron
upImg.addEventListener('click', function(){
    if(imgShow < imgsCarousel.length - 1){
    imgsCarousel[imgShow].classList.remove('show');
    imgShow++;
    imgsCarousel[imgShow].classList.add('show');
    }
});
botImg.addEventListener('click', function(){
    if(imgShow > 0){
        imgsCarousel[imgShow].classList.remove('show');
        imgShow--;
        imgsCarousel[imgShow].classList.add('show');
        }
});