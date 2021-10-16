// function getParameter(parameterName) {
//   //fonction pour récupérer le paramétre d'une URL
//   let parameter = new URLSearchParams(window.location.search);
//   return parameter.get(parameterName);
// }

// function get_article_by_id() {
//   //fonction pour afficher l'article souhaiter avec le parametre URL
//   const id = getParameter("id");
//   console.log(id);
//   var produit = "";
//   fetch("http://localhost:3000/api/cameras/" + id)
//   .then((res) => {
//     produit = res.json();

//     console.log(produit);
//     //console.log(res.data);
//     document.querySelector(".list-product").innerHTML = `
//       <div class="col-4 mx-auto grandConteneur" id="${produit._id}">
//       <div class="image">
//       <img src="${produit.imageUrl}">
//       <p class="lenses"><div class="dropdown">
//     <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//       Lenses
//     </button>
//     <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//       <li><a class="dropdown-item" href="#">${produit.lenses}</a></li>
//       <li><a class="dropdown-item" href="#">${produit.lenses}</a></li>
//       <li><a class="dropdown-item" href="#">${produit.lenses}</a></li>
//     </ul>
//     </div></p>
//       <p class="name">${produit.name}</p>
//       <p class="price">${produit.price}
//       <p class="description">${produit.description}</p>
//       `;
//   });
// }

// get_article_by_id();

function getParameter(parameterName) {
  //fonction pour récupérer le paramétre d'une URL
  let parameter = new URLSearchParams(window.location.search);
  return parameter.get(parameterName);
}

function get_article_by_id() {
  //fonction pour afficher l'article souhaiter avec le parametre URL
  const id = getParameter("id");

  fetch("http://localhost:3000/api/cameras/" + id)
    .then((res) => res.json())
    .then((res) => {
      write_product(res);
    });
}

function write_product(product) {
  document.querySelector(".list-product").innerHTML = `
      <div class="col-4 mx-auto grandConteneur" id="${product._id}">
        <div class="image">
          <img src="${product.imageUrl}">
        </div>
      <p class="lenses">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Lenses
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">${product.lenses}</a></li>
            <li><a class="dropdown-item" href="#">${product.lenses}</a></li>
            <li><a class="dropdown-item" href="#">${product.lenses}</a></li>
          </ul>
        </div></p>
        <div class="petitConteneur">
          <p class="name">${product.name}</p>
          <p class="price">${product.price}
          <p class="description">${product.description}</p>
          <a href="#" title="add to cart" class="addToCart">
            <p>Ajouter au panier</p>
          <a/>
        </div>
      </div>
      `;
}

get_article_by_id();
