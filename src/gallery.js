import images from "./gallery-items.js";

const refs = {
    gallery: document.querySelector(".js-gallery"),
    lightbox: document.querySelector(".js-lightbox"),
    closeLightboxBtn: document.querySelector('[data-action="close-lightbox"]'),
    lightboxOverlay: document.querySelector(".lightbox__overlay"),
    lightboxContent: document.querySelector(".lightbox__content")
}

// напомнюємо текст HTML по шаблону і додаємо його в ul
let makeHtmlItemGallery = ""
images.forEach(item=> {
    makeHtmlItemGallery = makeHtmlItemGallery + '<li class="gallery__item"> <a class="gallery__link" href="' + item.original + 
    '" >  <img class="gallery__image" src="' + item.preview + '" data-source="' + item.original + 
    '" alt="' + item.description + '" /> </a> </li>'
})
refs.gallery.insertAdjacentHTML('afterbegin', makeHtmlItemGallery)

// делегування на ul.js-gallery
refs.gallery.addEventListener("click", clickGallery);
refs.closeLightboxBtn.addEventListener("click", closeLightbox);



// модальне вікно  
refs.lightbox.classList.add('is-open')






