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
        <div class="conteneur" id="${article._id}">
          <div class="image">
            <a href="http://127.0.0.1:5500/Frontend/produits.html?id=${article._id}">
              <img src="${article.imageUrl}">
            </a>
          </div>
          <div class="petitConteneur">
            <p class="name">${article.name}</p>
            <p class="price">${article.price}
            <p class="description">${article.description}</p>
            <a href="http://127.0.0.1:5500/Frontend/produits.html?id=${article._id}" title="show product" class="addToCart">
            <p>Voir le produit</p>
            <a/>
          </div>
        </div>
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

//ajout au panier
// let addToCartBtn = document.getElementsByClassName("addToCart");
// console.log(addToCartBtn);
// for (let i = 0; i < addToCartBtn.length; i++) {
//   addToCartBtn[i].addEventListener("click", addToCart);
// }

// function addToCart(event) {
//   let btn = event.target;
//   let btn_parent = btnparentElement;
//   let btn_grandgrandParent = btn.parentElement.parentElement.parentElement;
//   let itemName = btn_parent.children[0].innerText;
//   let itemPrice = btn_parent.children[1].innerText;
//   let itemImage = btn_grandgrandParent.children[0].src;
// }
