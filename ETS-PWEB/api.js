fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let isi = ""
    data.results.forEach((element) => {
        isi += `  <div class="card" >
        <div class="card-body">
          <h6 class="card-title">${element.name}</h6>
          <a href="${element.url}" class="btn btn-primary">Detail</a>
        </div></div>`;
    });
    document.getElementById("list").innerHTML=isi;
  })
  .catch((error) => console.log(error));
