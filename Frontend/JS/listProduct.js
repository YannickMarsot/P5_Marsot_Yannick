function getArticle() {
  //fonction pour récupérer l'API
  fetch("http://localhost:3000/api/cameras")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (jsonListArticle) {
      console.log("coucou");
      //Fonction boucle dans laquelle on crée un objet en HTML pour chaque article
      for (article of jsonListArticle) {
        console.log("recoucou");
        document.querySelector(".list-product").innerHTML += `
        <div class="col-4 mx-auto conteneur" id="${article._id}">
        <div class="image">
        <a href="http://127.0.0.1:5500/Frontend/produits.html?id=${article._id}">
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
