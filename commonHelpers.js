import{i as m,S as d}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=document.querySelector(".search-form");document.querySelector(".search-form-btn");const f=document.querySelector(".search-input"),i=document.querySelector(".gallery"),u=document.querySelector(".loader"),p=()=>u.dataset.loading="true",l=()=>u.dataset.loading="false",g=()=>{const o=f.value,a=`https://pixabay.com/api/?${new URLSearchParams({key:"41640115-31701c1b62cbb4a16b6499d34",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;p(),fetch(a).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(({hits:r})=>{l(),r.length===0?m.error({message:"Sorry, there are no images matching your search query. Please try again!"}):i.innerHTML=r.map(e=>`
              
                <a class="gallery-link" href=${e.largeImageURL}>
                  <img
                    class="gallery-image"
                    src=${e.webformatURL}
                    alt=${e.tags}
                  />
                
                <div class="img-info-wrapper">
                  <p class="img-info">Likes: ${e.likes}</p>
                  <p class="img-info">Views: ${e.views}</p>
                  <p class="img-info">Comments: ${e.comments}</p>
                  <p class="img-info">Downloads: ${e.downloads}</p>
                </div>
              </a>
            `).join(""),new d(".gallery a",{captionDelay:250,captionsData:"alt"}),i.refresh()}).catch(r=>{console.log(r),l()})},y=o=>{o.preventDefault(),g(),c.reset()};c.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
