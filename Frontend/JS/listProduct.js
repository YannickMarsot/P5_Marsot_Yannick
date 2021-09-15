function getArticle() {
  //ici on récupére l'api
  fetch("http://localhost:3000/api/cameras")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (jsonListArticle) {
      console.log("coucou");
      // boucle dans laquelle pour chaque article crée un html
      for (article of jsonListArticle) {
        console.log("recoucou");
        document.querySelector(".list-product").innerHTML += `
        <div class="col-4 mx-auto conteneur" id="${article._id}">
        <div class="image">
        <a href="http://127.0.0.1:5500/Frontend/${article._id}.html">
        <img src="${article.imageUrl}">
        <p class="lenses">${article.lenses}</p>
        <p class="name">${article.name}</p>
        <p class="price">${article.price}
        <p class="description">${article.description}</p>
        </a>
        `;
        //utilisation des "templates litteral" pour selectionner
        //chaque element de l'objet
      }
    })
    .catch(function (err) {
      // en cas d'erreur
    });
}

getArticle();