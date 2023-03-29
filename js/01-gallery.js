import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
gallery.classList.add('gallery')
const markup = galleryItems.map((item) => `<li class="gallery__item"><img class="gallery__image" src=${item.preview} alt=${item.description}></li>`)
gallery.insertAdjacentHTML('beforeend', markup.join(""));

