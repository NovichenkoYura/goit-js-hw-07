import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// console.log(createGalleryItemsMarkup(galleryItems))

const galleryList = document.querySelector('.gallery');
const ItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', ItemsMarkup);

galleryList.addEventListener('click', onImageItemClick)

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="small-image.jpg"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
    }).join('');
}

// function onImageItemClick(evt) {
//     if (!evt.target.classList.contains('gallery__image')) {
//         return;
//     }
//     console.log(evt.target);
// }

