import images from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  closeLightboxBtn: document.querySelector('[data-action="close-lightbox"]'),
  lightboxOverlay: document.querySelector(".lightbox__overlay"),
  lightboxContent: document.querySelector(".lightbox__content"),
  lightboxImage: document.querySelector(".lightbox__image"),
};

// напомнюємо текст HTML по шаблону і додаємо його в ul
let makeHtmlItemGallery = "";
images.forEach((item) => {
  makeHtmlItemGallery =
    makeHtmlItemGallery +
    '<li class="gallery__item"> <a class="gallery__link" href="' +
    item.original +
    '" >  <img class="gallery__image" src="' +
    item.preview +
    '" data-source="' +
    item.original +
    '" alt="' +
    item.description +
    '" /> </a> </li>';
});
refs.gallery.insertAdjacentHTML("afterbegin", makeHtmlItemGallery);

// делегування на ul.js-gallery
refs.gallery.addEventListener("click", clickGallery);
refs.closeLightboxBtn.addEventListener("click", closeLightbox);
refs.lightboxOverlay.addEventListener("click", closeLightbox);
window.addEventListener("keydown", closeByEsc);
document.addEventListener("keydown", scrollingArrow);
document.addEventListener("keydown", randomSlide);

function clickGallery(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  refs.lightbox.classList.add("is-open");
  refs.lightboxImage.src = event.target.getAttribute("data-source");
}

function closeLightbox(event) {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.src = "";
}

function closeByEsc(event) {
  if (event.keyCode == 27) {
    refs.lightbox.classList.remove("is-open");
    refs.lightboxImage.src = "";
  }
}

// Функція пролистування слайдів стрілками "вліво - вправо"
function scrollingArrow(event) {
  let idx = images.findIndex(
    (item) => item.original === refs.lightboxImage.src
  );
  if (event.keyCode == 37 && idx > 0) {
    refs.lightboxImage.src = images[idx - 1].original;
  } else if (event.keyCode == 39 && idx < images.length - 1) {
    refs.lightboxImage.src = images[idx + 1].original;
  }
}

// Функція рандомного вибору слайда клавішою "стрілка вверх"
function randomSlide(event) {
  if (event.keyCode == 38) {
    let randomIdx = Math.floor(Math.random() * images.length);
    refs.lightboxImage.src = images[randomIdx].original;
  }
}
