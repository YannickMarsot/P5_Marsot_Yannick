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

//affichage panier

function affichagePanier() {
  const local_storage = localStorage.getItem("products");

  if (local_storage === null) {
    //affichage panier vide:
    console.log("je suis vide");
    document.querySelector("#petitContainerAffichagePanier").innerHTML = `
          <p>Pour l'instant vôtre panier est vide</p>
      `;
  } else {
    //affichage panier rempli:
    console.log("je suis rempli");
    [local_storage].forEach((element) => {
      console.log(element);

      let elementObjet = JSON.parse(element);
      //avec JSON.parse on transforme un element JSON en objet javascript!!!
      console.log(elementObjet);

      document.querySelector("#affPanier").innerHTML += `
      <li class="list-group-item">
        <span class="idItem">id:${elementObjet.id}</span>
        <span class="sizeItem">size:${elementObjet.size}</span>
        <span class="qteItem">quantitee:${elementObjet.qte}</span>
        <span class="costItem">cost:${elementObjet.total}</span>
      </li>
      `;
    });
  }
}

affichagePanier();

//envoyer les données à l'api

function sendContact() {
  let firstName = document.getElementById("text_prenom").value;
  let lastName = document.getElementById("text_nom").value;
  let city = document.getElementById("City").value;
  let adress = document.getElementById("adress").value;
  let email = document.getElementById("e-mail").value;
  console.log(firstName, "sendData verification");
  let contact = {
    firstName,
    lastName,
    city,
    adress,
    email,
  };
  console.log(contact, "data verification");
  //utilisation de la methode "POST" afin d'envoyer les données à l'api
  fetch("/order", {
    method: "POST",
    body: contact,
    products,
  }).then((res) => console.log(res.status));
  alert("vôtre commande à était envoyé!!!");
}
