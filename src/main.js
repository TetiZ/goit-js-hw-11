'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const submitBtn = document.querySelector('.search-form-btn');
const input = document.querySelector('.search-input');

const gallery = document.querySelector('.gallery');

// spinner

const loader = document.querySelector('.loader');
const showLoader = () => (loader.dataset.loading = 'true');
const hideLoader = () => (loader.dataset.loading = 'false');

// Pixabay
// HTTP - запити;
// event listener

const searchImg = () => {
  const inputText = input.value;

  const params = new URLSearchParams({
    key: '41640115-31701c1b62cbb4a16b6499d34',
    q: `${inputText}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `https://pixabay.com/api/?${params}`;

  showLoader();

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(({ hits }) => {
      hideLoader();

      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        gallery.innerHTML = hits
          .map(
            hit => `
              
                <a class="gallery-link" href=${hit.largeImageURL}>
                  <img
                    class="gallery-image"
                    src=${hit.webformatURL}
                    alt=${hit.tags}
                  />
                
                <div class="img-info-wrapper">
                  <p class="img-info">Likes: ${hit.likes}</p>
                  <p class="img-info">Views: ${hit.views}</p>
                  <p class="img-info">Comments: ${hit.comments}</p>
                  <p class="img-info">Downloads: ${hit.downloads}</p>
                </div>
              </a>
            `
          )
          .join('');
      }

      let lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
      });
      gallery.refresh();
    })
    .catch(error => {
      console.log(error);
      hideLoader();
    });
};

const submitHandler = e => {
  e.preventDefault();
  searchImg();
  form.reset();
};

form.addEventListener('submit', submitHandler);
