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
  console.log(product.lenses);
  product.lenses.forEach(function (item, index) {
    console.log(item, index);
  });
  //version 2 (non fonctionnelle)
  //avec display "none" pour "undefined"
  // console.log(product.lenses);
  // if (product.lenses !== "undefined") {
  //   product.lenses = '<p style="display: none">undefined</p>';
  // } else {
  //   product.lenses.forEach(function (item, index) {
  //     console.log(item, index);
  //   });
  // }
  document.querySelector(".list-product").innerHTML = `
    <div class="col-4 mx-auto grandConteneur" id="${product._id}">
      <div class="image">
        <img src="${product.imageUrl}">
      </div>
      <div class="lensesConteneur">
        <label for="lenses">Choose a lense</label>
          <select name="Lenses" id="lensesSelect">          
          </select>
      </div>
      <div class="quantityConteneur">
        <label for="quantity">Select quantity</label>
        <input type="number" id="quantity" name="quantity"
        min="1" max="10" value="1" onclick="select_quantity();">
      </div>
      <div class="petitConteneur">
        <p class="name">${product.name}</p>
        <p class="price">${product.price}</p>
        <p class="description">${product.description}</p>
        <button href="#" onclick="addToCart();">
        Ajouter au panier
        </button>  
      </div>
    </div>
      `;
  console.log(product.lenses);
  product.lenses.forEach(function (item, index) {
    //dropdown menu
    console.log(item, index);
    for (i = 0; i < product.lenses; i++) {
      document.querySelector(
        "#lensesSelect"
      ).innerHTML += `<option value="exemple" class="lenses_choice" onclick="select_lenses();">${product.lenses[i]}</option>`;
      console.log(i.length);
    }
  });
}

//ajout au panier
function addToCart() {
  let id_product = document.getElementsByClassName("grandConteneur");
  let price_product = document.getElementsByClassName("price");
  //let name = document.getElementsByClassName("name"); (pour futur implémentation du panier?)
  //let image = document.getElementsByClassName("image"); (pour futur implémentation du panier?)
  console.log(price_product[0].innerText);
  let product = {
    id: id_product[0].id,
  };
  let panier = {
    id: id_product[0].id,
    price: price_product[0].innerText,
    // size: (option lenses),
    qte: 1,
    total: qte * price,
  };
  //localStorage.setItem(JSON.stringify(product), JSON.stringify(panier));
  localStorage.setItem("product", JSON.stringify(product));
  localStorage.setItem("cart", JSON.stringify(panier));
}

function select_quantity() {
  qte = document.getElementById("quantity");
  console.log(qte);
}

function select_lenses() {
  size = document.getElementsByClassName("lenses_choice");
  console.log(size);
}

get_article_by_id();
