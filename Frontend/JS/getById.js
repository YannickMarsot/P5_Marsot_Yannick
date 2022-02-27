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
//check product exist
function checkProductExist() {
  let product = localStorage.getItem("products");
  if (product.length == 0) {
    return 0;
  } else {
    return JSON.stringify(product);
  }
}
//ajout au panier
function addToCart() {
  let check_panier = checkProductExist();
  let id_product = document.getElementsByClassName("grandConteneur"); //id dans "grand conteneur"
  let price_product = document.getElementsByClassName("price");
  var quantity = document.getElementById("quantity");
  var value_quantity = quantity.options[quantity.selectedIndex].value;
  var lenses_selected = document.getElementById("lensesSelect");
  var sizelenses_selected =
    lenses_selected.options[lenses_selected.selectedIndex].value;
  var totalCart = value_quantity * price_product[0].innerText;
  let selected_product = {
    id: id_product[0].id,
    size: sizelenses_selected,
    price: price_product[0].innerText,
    qte: value_quantity,
    total: totalCart,
  };
  let myCart = [];

  if (check_panier != 0) {
    //j'ai un produit existant
    console.log(check_panier);
    myCart.push(check_panier);
    console.log(myCart);
  } else {
    localStorage.setItem("products", JSON.stringify(selected_product));
  }

  /*
  if (localStorage.length === 0) {
    //si mon panier est vide
    localStorage.setItem("products", JSON.stringify(selected_product));
  } else {
    //si mon panier est rempli
    var objectProduct = JSON.parse(localStorage.getItem("products"));
    myCart.push(objectProduct);
    //a la 2em itération objetproduct est un tableau
    myCart.push(selected_product);
    localStorage.setItem("products", JSON.stringify(myCart));
    //en stringifiant myCart à la 3em itération on rajoute un tableau dans un tableau et ainsi de suite!!!
  }*/
  alert("vôtre commande a été ajouté au panier");
}

function select_quantity() {
  var quantity = document.getElementById("quantity");
  var value_quantity = quantity.options[quantity.selectedIndex].value;
  return value_quantity;
  //console.log(value_quantity);
}

function select_lenses() {
  var lenses_selected = document.getElementById("lensesSelect");
  var sizeLenses_selected =
    lenses_selected.options[lenses_selected.selectedIndex].value;
  return sizeLenses_selected;
  //console.log(sizeLenses_selected);
}

// function button_disabled() {
//   //fonction pour ne pas ajouter des produits sans rien selectionner
//   const button = document.getElementById("addToCart-btn");
//   var quantity = document.getElementById("quantity");
//   var value_quantity = quantity.option[quantity.selectedIndex].value;
//   var lenses_selected = document.getElementById("lensesSelect");
//   var sizeLenses_selected =
//     lenses_selected.option[lenses_selected.selectedIndex].value;
//   if ((value_quantity = 0)) {
//     button.disabled = true;
//   }
//   if ((sizeLenses_selected = 0)) {
//     button.disabled = true;
//   }
// }

get_article_by_id();
//button_disabled();
