import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
// gallery.classList.add("gallery");

(function () {
  const markup = galleryItems.map(
    (image) =>
      `<li class="gallery__item">
    <a class="gallery__link" href=${image.original}>
        <img class="gallery__image" src=${image.preview} alt=${image.description} />
    </a>
</li>`
  );
  gallery.insertAdjacentHTML("beforeend", markup.join(""));
})();

var lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});
