import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.classList.add("gallery");
(function () {
  const markup = galleryItems.map(
    (image) =>
      `<li class="gallery__item js-target ">
  <a class="gallery__link js-target" >
    <img
      class="gallery__image js-target js-card"
      src=${image.preview}
      data-source=${image.original}
      alt=${image.description}
    />
  </a>
</li>`
  );
  gallery.insertAdjacentHTML("beforeend", markup.join(""));
})();

gallery.addEventListener("click", onClick);

function onClick(event) {
  if (!event.target.classList.contains("js-target")) {
    return;
  }

  const adress = event.target.closest(".js-card");
  const { source } = adress.dataset;
  const data = galleryItems.find(({ original }) => original === source);

  const instance = basicLightbox.create(`
      <img
        class="gallery__image"
        src=${data.original}
       
        alt=${data.description}
      />
  `);

  instance.show();
}
