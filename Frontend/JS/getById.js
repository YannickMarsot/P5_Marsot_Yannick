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
          <select name="Lenses" id="lenses-select">
          <option value="exemple">${product.lenses[0]}</option>
          <option value="exemple">${product.lenses[1]}</option>
          <option value="exemple">${product.lenses[2]}</option>
          </select>
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

  //fonction à mettre dans "write_product"
  //car product.name non défini sinon?
  // .then(function addToCart() {
  //   let name = document.getElementsByClassName("name");
  //   let price = document.getElementsByClassName("price");
  //   let image = document.getElementsByClassName("image");
  //   console.log(name, price, image);
  //   let product = { name, no: 1 };
  //   let panier = { price, no: 1 };
  //   localStorage.setItem(JSON.stringify(product), JSON.stringify(panier));
  // });
}

//ajout au panier
function addToCart() {
  // let id = document.getElementById("id");
  let name = document.getElementsByClassName("name");
  let price = document.getElementsByClassName("price");
  let image = document.getElementsByClassName("image");
  console.log(name, price, image);
  let product = { name, no: 1 };
  //let product= {
  //   id,
  //   name,
  //   no: 1
  // }
  let panier = {
    price,
    no: 1,
  };
  localStorage.setItem(JSON.stringify(product), JSON.stringify(panier));
}

get_article_by_id();
