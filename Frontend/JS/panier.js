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
  const local_storage = localStorage.getItem("product");
  if (local_storage === null) {
    //affichage panier vide:
    console.log("je suis vide");
    // document.querySelector(".containerAffichagePanier").innerHTML = `
    //     <h2>Vôtre panier</h2>
    //     <div id="petitContainerAffichagePanier">
    //       <p>Pour l'instant vôtre panier est vide</p>
    //     </div>
    //   `;
  } else {
    //affichage panier rempli:
    console.log("je suis rempli");
    [local_storage].forEach((element) => {
      console.log(element);
      let elementObjet = JSON.parse(element);
      //avec JSON.parse on transforme un element JSON en objet javascript!!!
      console.log(elementObjet.id);
      // document.querySelector(".containerAffichagePanier").innerHTML += `
      // <h2>Vôtre panier</h2>
      //   <div id="petitContainerAffichagePanier">
      //     <ul>
      //       <li>id:${elementObjet.id}</li>
      //       <li>size:${elementObjet.size}</li>
      //       <li>quantitee${elementObjet.qte}</li>
      //       <li>cost:${elementObjet.total}</li>
      //     </ul>
      //   </div>
      // `;
    });
  }
}

affichagePanier();
