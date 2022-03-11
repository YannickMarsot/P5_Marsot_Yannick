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
const cart = JSON.parse(localStorage.getItem("cameras")) || [];

//fonction dajout au panier
// const button = document.getElementById("addToCart-btn");
// button.setAttribute("disabled");
function addToCart() {
  let id_product = document.getElementsByClassName("grandConteneur"); //id dans "grand conteneur"
  let price_product = document.getElementsByClassName("price");
  var quantity = document.getElementById("quantity");
  var value_quantity = quantity.options[quantity.selectedIndex].value;
  var lenses_selected = document.getElementById("lensesSelect");
  var sizelenses_selected =
    lenses_selected.options[lenses_selected.selectedIndex].value;
  let selected_product = {
    id: id_product[0].id,
    size: sizelenses_selected,
    price: price_product[0].innerText,
    qte: value_quantity,
  };

  if (cart.length < 1) {
    cart.push(selected_product);
    localStorage.setItem("cameras", JSON.stringify(cart));
  } else {
    cart.push(selected_product);
    localStorage.setItem("cameras", JSON.stringify(cart));
  }
  alert("vôtre commande a été ajouté au panier");

  //afin d'eviter de rajouter des produits = 0
  // if (value_quantity != 0) {
  //   button.disabled = false;
  // }
  // if (sizeLenses_selected != 0) {
  //   button.disabled = false;
  // }
}
// function checkProductExist() {
//   const product = localStorage.getItem("products");
//   if (product) {
//     return product;
//   } else {
//     return false;
//   }
// }

// function addToCart() {
//   let cart_exist = checkProductExist();
//   let id_product = document.getElementsByClassName("grandConteneur"); //id dans "grand conteneur"
//   let price_product = document.getElementsByClassName("price");
//   var quantity = document.getElementById("quantity");
//   var value_quantity = quantity.options[quantity.selectedIndex].value;
//   var lenses_selected = document.getElementById("lensesSelect");
//   var sizelenses_selected =
//     lenses_selected.options[lenses_selected.selectedIndex].value;
//   let selected_product = {
//     id: id_product[0].id,
//     size: sizelenses_selected,
//     price: price_product[0].innerText,
//     qte: value_quantity,
//   };
//   let myCart = [];

//   if (cart_exist == false) {
//     localStorage.setItem("products", JSON.stringify(selected_product));
//   } else {
//     myCart.push(JSON.parse(cart_exist));
//     myCart.push(selected_product);
//     localStorage.setItem("products", JSON.stringify(myCart));
//   }
//   alert("vôtre commande a été ajouté au panier");
// }

// function select_quantity() {
//   var quantity = document.getElementById("quantity");
//   var value_quantity = quantity.options[quantity.selectedIndex].value;
//   return value_quantity;
//   console.log(value_quantity);
// }

// function select_lenses() {
//   var lenses_selected = document.getElementById("lensesSelect");
//   var sizeLenses_selected =
//     lenses_selected.options[lenses_selected.selectedIndex].value;
//   return sizeLenses_selected;
//   console.log(sizeLenses_selected);
// }

// function button_disabled() {
//   //fonction pour ne pas ajouter des produits sans rien selectionner
//   const button = document.getElementById("addToCart-btn");
//   var quantity = document.getElementById("quantity");
//   console.log("quantity-btn", quantity);
//   var value_quantity = quantity.options[quantity.selectedIndex].value;
//   console.log("quantity-btn-value", value_quantity);
//   var lenses_selected = document.getElementById("lensesSelect");
//   console.log("lenses_selected", lenses_selected);
//   var sizeLenses_selected =
//     lenses_selected.option[lenses_selected.selectedIndex].value;
//   console.log("lenses-selected-size", sizeLenses_selected);
//   if ((value_quantity = 0)) {
//     button.disabled = true;
//   }
//   if ((sizeLenses_selected = 0)) {
//     button.disabled = true;
//   }
// }

get_article_by_id();
// button_disabled();
