//REGEX

function validatePrenom() {
  //fonction pour valider le prenom saisi
  let text = document.getElementById("text_prenom");
  if (/^([A-Za-z]{2,20})+$/.test(text.value)) {
    return true;
  }
  alert("le prenom saisi n'est pas valide");
  return false;
}

function validateNom() {
  //fonction pour valider le nom saisi
  let text = document.getElementById("text_nom");
  if (/^([A-Za-z]{2,20})+$/.test(text.value)) {
    return true;
  }
  alert("le nom saisi n'est pas valide");
  return false;
}

function validateVille() {
  //fonction pour valider la ville saisi
  let text = document.getElementById("City");
  if (/^([a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\'])+$/.test(text.value)) {
    return true;
  }
  alert("la ville saisi n'est pas valide");
  return false;
}

function validateAdress() {
  //fonction pour valider l'adresse saisi
  let adress = document.getElementById("adress");
  if (/^\w+([A-Za-z0-9'\.\-\s\,]{5,50})+$/.test(adress.value)) {
    return true;
  }
  alert("l'adresse n'est pas valide");
  return false;
}

function validateEmail() {
  //fonction pour valider l'e-mail saisi
  let mail = document.getElementById("e-mail");
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
    return true;
  }
  alert("l'email n'est pas valide");
  return false;
}

//affichage panier  (AJOUTER LA GESTION DES QTE DANS LE PANIER + AFFICHER ME TOTAL € DE NOTRE PANIER)

function affichagePanier() {
  const local_storage = localStorage.getItem("cameras");
  if (local_storage === null) {
    //affichage panier vide:
    //console.log("je suis vide");
    document.querySelector("#petitContainerAffichagePanier").innerHTML = `
          <p>Pour l'instant vôtre panier est vide</p>
      `;
  } else {
    //affichage panier rempli:
    console.log("je suis rempli");
    let elementObjet = JSON.parse(local_storage);
    console.log("elementObjet", elementObjet);
    //avec JSON.parse on transforme un element JSON en objet javascript!!!
    elementObjet.forEach((element) => {
      console.log(element);
      let total = element.qte * element.price;
      document.querySelector("#affPanier").innerHTML += `
      <li class="list-group-item">
        <span class="idItem">id:${element.id}</span>
        <span class="sizeItem">size:${element.size}</span>
        <span class="qteItem">quantitee:${element.qte}</span>
        <span class="costItem">cost:${total}</span>
      </li>
      `;
    });
  }
}

affichagePanier();

//envoyer les données à l'api
function getLocalStorage() {
  const getProduct = JSON.parse(localStorage.getItem("cameras"));
  if (getProduct) {
    return getProduct;
  } else {
    return false;
  }
}

function sendContact() {
  let firstName = document.getElementById("text_prenom").value;
  let lastName = document.getElementById("text_nom").value;
  let city = document.getElementById("City").value;
  let address = document.getElementById("adress").value;
  let email = document.getElementById("e-mail").value;
  console.log(firstName, "sendData verification");
  let contact = {
    firstName,
    lastName,
    city,
    address,
    email,
  };
  const produits = getLocalStorage();
  console.log(produits);
  let products = [];
  //Faire une boucle pour push chaque id de produit
  produits.forEach((element) => products.push(element.id));

  const data = {
    contact,
    products,
  };
  //utilisation de la methode "POST" afin d'envoyer les données à l'api
  fetch("http://127.0.0.1:3000/api/cameras/order", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    mode: "cors",
  }).then((res) => {
    //Faire une redirection sur la page de confirmation avec un paramètre dans l'url (order_id)
    console.log(res);
  });
  //récupérer l'id pour la page confirmation panier
  alert("vôtre commande à était envoyé!!!");
}
