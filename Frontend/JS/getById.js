function getParameter(parameterName) {
  //fonction pour récupérer le paramétre d'une URL
  let parameter = new URLSearchParams(window.location.search);
  return parameter.get(parameterName);
}

function get_article_by_id() {
  //fonction pour afficher l'article souhaiter avec le parametre URL
  const id = getParameter("id");
  console.log(id);

  fetch("http://localhost:3000/api/cameras/" + id).then((res) => {
    console.log(res.data);
    document.querySelector(".list-product").innerHTML = `
      <div class="col-4 mx-auto grandConteneur" id="${id._id}">
      <div class="image">
      <img src="${id.imageUrl}">
      <p class="lenses"><div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Lenses
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">${id.lenses}</a></li>
      <li><a class="dropdown-item" href="#">${id.lenses}</a></li>
      <li><a class="dropdown-item" href="#">${id.lenses}</a></li>
    </ul>
    </div></p>
      <p class="name">${id.name}</p>
      <p class="price">${id.price}
      <p class="description">${id.description}</p>
      `;
  });
}

get_article_by_id();
