function getArticleById() {
  fetch("http://localhost:3000/api/cameras/?getById=${article._id}")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (article) {
      console.log("coucou");
      document.querySelector(".list-product").innerHTML = `
          <div class="col-4 mx-auto grandConteneur" id="${article._id}">
          <div class="image">
          <img src="${article.imageUrl}">
          <p class="lenses">${article.lenses}</p>
          <p class="name">${article.name}</p>
          <p class="price">${article.price}
          <p class="description">${article.description}</p>
          `;
    });
}
