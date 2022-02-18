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
  //fonction pour afficher le produit
  document.querySelector(".list-product").innerHTML = `
    <div class="col-4 mx-auto grandConteneur" id="${product._id}">
      <div class="image">
        <img src="${product.imageUrl}">
      </div>
      <div class="lensesConteneur">
        <label for="lenses">Choose a lense</label>
          <select name="Lenses" id="lensesSelect" onChange="select_lenses();">  
          <option value="0" selected="selected" disabled>select an option</option>        
          </select>
      </div>
      <div class="quantityConteneur">
        <label for="quantity">Select quantity</label>
          <select id="quantity" onchange="select_quantity();">
            <option value="0"selected="selected" disabled>select an option</option>
            <option value="1" class="quantity_choices">1</option>
            <option value="2" class="quantity_choices">2</option>
            <option value="3" class="quantity_choices">3</option>
            <option value="4" class="quantity_choices">4</option>
            <option value="5" class="quantity_choices">5</option>
        </select>
      </div>
      <div class="petitConteneur">
        <p class="name">${product.name}</p>
        <p class="price">${product.price}</p>
        <p class="description">${product.description}</p>
        <button id="addToCart-btn" href="#" onclick="addToCart();">
        Add To Cart
        </button>  
      </div>
    </div>
      `;

  product.lenses.forEach(function (item) {
    //dropdown menu
    document.querySelector(
      "#lensesSelect"
    ).innerHTML += `<option value="${item}" class="quantity_choices">${item}</option>`;
  });
}

//ajout au panier
function addToCart() {
  let id_product = document.getElementsByClassName("grandConteneur");
  let price_product = document.getElementsByClassName("price");
  var quantitee = document.getElementById("quantity");
  var valeur_quantitee = quantitee.options[quantitee.selectedIndex].value;
  var lenses_selected = document.getElementById("lensesSelect");
  var valeur_selectionnee =
    lenses_selected.options[lenses_selected.selectedIndex].value;
  var totalPanier = valeur_quantitee * price_product[0].innerText;
  const button = document.getElementById("addToCart-btn");
  let selected_product = {
    id: id_product[0].id,
    size: valeur_selectionnee,
    price: price_product[0].innerText,
    qte: valeur_quantitee,
    total: totalPanier,
  };
  let monPanier = [];
  if (localStorage.length === 0) {
    //si mon panier est vide
    monPanier.push(selected_product);
    localStorage.setItem("products", JSON.stringify(monPanier));
    console.log("ajouter aux panier", JSON.parse(localStorage.products));
  } else {
    //si mon panier est rempli
    const objetProduct = JSON.parse(localStorage.getItem("products"));
    console.log("voici le contenu panier", objetProduct);
    monPanier.push(objetProduct);
    monPanier.push(selected_product);
    localStorage.setItem("products", JSON.stringify(monPanier));
  }
  alert("vôtre commande a été ajouté au panier");
  //condition pour ne pas ajouter des produits sans rien selectionner
  if ((valeur_quantitee = 0)) {
    button.disabled = true;
  }
  if ((valeur_selectionnee = 0)) {
    button.disabled = true;
  }
}

function select_quantity() {
  var quantitee = document.getElementById("quantity");
  var valeur_quantitee = quantitee.options[quantitee.selectedIndex].value;
  return valeur_quantitee;
  //console.log(valeur_quantitee);
}

function select_lenses() {
  var lenses_selected = document.getElementById("lensesSelect");
  var valeur_selectionnee =
    lenses_selected.options[lenses_selected.selectedIndex].value;
  return valeur_selectionnee;
  //console.log(valeur_selectionnee);
}

get_article_by_id();
