const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.img-grid img');
const opacity = 0.4;

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click',  imgClick));

function imgClick (e) {
    //Reset opacity once an image is clicked
    imgs.forEach(img => (img.style.opacity = 1));
    //Set current img ssrc to clicked image src
    current.src = e.target.src;
    //Set opacity of clicked image to 0.4
    e.target.style.opacity = opacity;
}