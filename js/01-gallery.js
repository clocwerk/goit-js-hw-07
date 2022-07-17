import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const items = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
});

gallery.insertAdjacentHTML("beforeend", items.join(""));

gallery.addEventListener("click", handerGalleryClick);

let modalEl;

function handerGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  modalEl = basicLightbox.create(
    `<img src="${event.target.dataset.source}"/>`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModalEsc);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModalEsc);
      },
    }
  );

  modalEl.show();
}

function closeModalEsc(event) {
  if (event.code !== "Escape") {
    return;
  }
  modalEl.close();
  // console.log(event.code);
}
