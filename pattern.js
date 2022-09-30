const url =
  "https://api.harvardartmuseums.org/image?size=20&apikey=79d0b1b5-6d83-4823-9c14-b50caba0f7ae";

let links = document.querySelectorAll("h3");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
let art = document.querySelector(".menu-link");
let img = document.querySelector("img");
let picContainer = document.querySelector("#banner-container");

//links.addEventListener("click", );
fetch(url)
  .then((res) => res.json())
  .then((data) => {
     console.log(data.records)
    renderResults(data);
  });


function renderResults(picData) {
  picData.records.forEach((pic, i) => {
    // const cardInfo = `
    //   <div class="picContainer">
    //   <img src="${pic.baseimageurl}" height="500" width="350">
    //   </div>
    // `
    const menuItemHTML = `
        <li class="menu-item">
          <h3 class="menu-link" data-id="${pic.id}">Lot ${pic.id}</h3>
        </li>    
      `;
    // picContainer.insertAdjacentHTML('beforeend', cardInfo)
    menu.insertAdjacentHTML("beforeend", menuItemHTML);
  });

  img.src = picData.records[0].baseimageurl

  let menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => handleImgSrc(e, picData.records));
  });
}

function handleImgSrc(e, records) {
  let recordFound = records.find((rec) => {
    menu.classList.remove("active");
    hamburger.classList.remove("active");
    return rec.id == e.target.dataset.id;
  
  });

  img.src = recordFound.baseimageurl
}

/*function renderResults(picData) {
  console.log(picData)
  picData.records.forEach((pic) => {
    // console.log(pic.baseimageurl)
    
    piece.append(links)
  })
}
*/

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  
});

document.querySelectorAll(".menu-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  })
);
