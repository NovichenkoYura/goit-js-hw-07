import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const ItemsMarkup = createGalleryItemsMarkup(galleryItems);
// const { preview, original, description } = galleryItems;

galleryList.insertAdjacentHTML('beforeend', ItemsMarkup);


function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
    <li class="gallery__li">
    <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
    </a>
    </li>
    `;
    }).join('');
}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt" });
    
shown.simplelightbox
    
var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

    

// closed.simplelightbox


// function onImageItemClick(evt) {
//     evt.preventDefault();
//     if (!evt.target.classList.contains('gallery__image')) {
//         return;
//     }
// var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt" });
    
// shown.simplelightbox
    
// var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
    
    


//     // <img src="${evt.target.dataset.source}" width="800" height="600">    


        
// }



