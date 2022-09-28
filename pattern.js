const url = 'https://api.harvardartmuseums.org/image?apikey=9b4d0562-e0ec-4df2-9f9f-6b9399e5e704'

fetch(url)
  .then(res => res.json())
  .then(res => console.log("success!", res.records[0]
  //.then(res => console.log("success!", res.records[0].baseimageurl
  ))


