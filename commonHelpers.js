import{i as d,S as f}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=document.querySelector(".search-form");document.querySelector(".search-form-btn");const p=document.querySelector(".search-input"),n=document.querySelector(".gallery"),m=document.querySelector(".loader"),u=()=>m.classList.add("active"),l=()=>m.classList.remove("active"),g=()=>{const o=p.value,a=`https://pixabay.com/api/?${new URLSearchParams({key:"41640115-31701c1b62cbb4a16b6499d34",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;u(),fetch(a).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(({hits:r})=>{l(),r.length===0?d.error({message:"Sorry, there are no images matching your search query. Please try again!"}):n.innerHTML=r.map(e=>`
              
              <li class="gallery-item">
                <a class="gallery-link" href=${e.largeImageURL}>
                    <img
                      class="gallery-image"
                      src=${e.webformatURL}
                      alt=${e.tags}
                    />
                  
                  <div class="img-info-wrapper">
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Likes</h3>
                      <p class="img-info">${e.likes}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Views</h3>
                      <p class="img-info">${e.views}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Comments</h3>
                      <p class="img-info">${e.comments}</p>
                    </div>
  
                    <div class="img-part-info-wrapper">
                    <h3 class="img-info-title">Downloads</h3>
                      <p class="img-info">${e.downloads}</p>
                    </div>
                  </div>
              </a>
            </li>
            `).join(""),new f(".gallery a",{captionDelay:250,captionType:"attr",captionsData:"alt"}),n.refresh()}).catch(r=>{console.log(r),l()})},h=o=>{o.preventDefault(),g(),c.reset()};c.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
