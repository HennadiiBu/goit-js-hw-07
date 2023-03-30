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
  event.preventDefault();
  if (!event.target.classList.contains("js-target")) {
    return;
  }

  const adress = event.target.closest(".js-card");
  const { source } = adress.dataset;
  const data = galleryItems.find(({ original }) => original === source);
  const instance = basicLightbox.create(
    `
      <img
        class="gallery__image"
        src=${data.original}
       
        alt=${data.description}
      />
  `,
    {
      /*
       * Function that gets executed before the lightbox will be shown.
       * Returning false will prevent the lightbox from showing.
       */
      onShow: (instance) => {
        document.addEventListener("keydown", onEsc);
      },
      /*
       * Function that gets executed before the lightbox closes.
       * Returning false will prevent the lightbox from closing.
       */
      onClose: (instance) => {
        document.removeEventListener("keydown", onEsc);
      },
    }
  );
  instance.show();

  function onEsc(event) {
    const modal = document.querySelector(".basicLightbox");

    if (event.key === "Escape" && modal) {
      instance.close();
    }
  }
}
