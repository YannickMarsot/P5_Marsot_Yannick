const URL = "http://localhost:3000/api/cameras/?getById=${article._id}";
const a = window.document.createElement("a");
a.href = a;
let params = URLSearchParams(a.search);
params.get("/?getById=${article._id}");

function getArticleById() {
  fetch("http://localhost:3000/api/cameras/?getById=${article._id}")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (_id) {
      console.log("coucou");
      document.querySelector(".list-product").innerHTML = `
          <div class="col-4 mx-auto grandConteneur" id="${article._id}">
          <div class="image">
          <img src="${article.imageUrl}">
          <p class="lenses"><div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Lenses
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">${article.lenses}</a></li>
          <li><a class="dropdown-item" href="#">${article.lenses}</a></li>
          <li><a class="dropdown-item" href="#">${article.lenses}</a></li>
        </ul>
        </div></p>
          <p class="name">${article.name}</p>
          <p class="price">${article.price}
          <p class="description">${article.description}</p>
          `;
    });
}
