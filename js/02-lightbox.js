import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMarkUp = createCard(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkUp);

let gallery = new SimpleLightbox("ul.gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 250,
});

function createCard(items) {
  return items
    .map(({ preview, original, description }) => {
      return `  <li>
      <a 
         class="gallery__item" 
          href="${original}">
  <img 
      class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>
    </li>`;
    })
    .join("");
}
