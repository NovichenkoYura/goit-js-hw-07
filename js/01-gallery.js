import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const ItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', ItemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
    }).join('');
}

galleryList.addEventListener('click', onImageItemClick);

function onImageItemClick(evt) {
    const instance = basicLightbox.create(`
    <img src="${evt.target.original}" width="800" height="600">    
`)

    instance.show()
    evt.stopPropagation();
    
}
