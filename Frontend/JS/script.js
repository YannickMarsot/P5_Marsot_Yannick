function getArticle() {
  //ici on récupére l'api
  fetch("http://localhost:3000/api/cameras")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    // .then((data) => data.json())
    .then(function (jsonListArticle) {
      console.log("coucou");
      // boucle dans laquelle pour chaque article crée un html
      for (jsonArticle of jsonListArticle) {
        console.log("recoucou");
        // let article = new Article(jsonArticle);
        // console.log(article);
        document.querySelector("main").innerHTML += `
        <div class="col-4" id="${jsonArticle._id}">
        <div class="image">
        <a href="#"><img src="${jsonArticle.imageUrl}"></a>
        <p>${jsonArticle.name}</p>
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
