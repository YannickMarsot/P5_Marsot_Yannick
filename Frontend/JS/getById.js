const URL ="http://localhost:3000/api/cameras/?getById=${article._id}"

const a = window.document.createElement("a")
a.href = URL
let params = new URLSearchParams(a.search)
params.get = (getById) //? ${article._id};

function getArticleById() {
  fetch("http://localhost:3000/api/cameras/?getById=${article._id}")
  .then(
    function (res) {
      if (res.ok) {
        return res.json();
      }
    }
  );
  .then(function (productbyId) {
console.log("coucou");
document.querySelector(".list-product").innerHTML `
        <div class="col-4 mx-auto grandConteneur" id="${article._id}">
        <div class="image">
        <a href="http://127.0.0.1:5500/Frontend/${article._id}.html">
        <img src="${article.imageUrl}">
        <p class="lenses">${article.lenses}</p>
        <p class="name">${article.name}</p>
        <p class="price">${article.price}
        <p class="description">${article.description}</p>
        </a>
        `;
      }
  )
}
