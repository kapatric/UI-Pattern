const url = 'https://api.harvardartmuseums.org/image?apikey=9b4d0562-e0ec-4df2-9f9f-6b9399e5e704'


let links = document.querySelectorAll("a");
//
//links.addEventListener("click", );
fetch(url)
    .then(res => res.json())
  .then(data => {
   // console.log(data.records)
    renderResults(data) 
  })
    
function renderResults(picData) {
  console.log(picData)
  picData.records.forEach((pic) => {
    // console.log(pic.baseimageurl)
    let a = document.getElementsByTagName("a")
    let piece = pic.baseimageurl
    piece.append(a)
  });
}