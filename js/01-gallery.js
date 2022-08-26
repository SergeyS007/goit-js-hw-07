import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMarkUp = createCard(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkUp);

galleryContainer.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  console.log(event.target.dataset.source);
  const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}'>
`);
  instance.show();
  window.addEventListener("keydown", onEscapePress);
  function onEscapePress(event) {
    const ESC_KEY_CODE = `Escape`;
    const isEscape = ESC_KEY_CODE === event.code;
    if (isEscape) {
      instance.close();
      window.removeEventListener("keydown", onEscapePress);
    }
  }
}

function createCard(items) {
  return items
    .map(({ preview, original, description }) => {
      return `  <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}
