function getParameter(parameterName) {
  //fonction pour récupérer le paramétre d'une URL
  let parameter = new URLSearchParams(window.location.search);
  return parameter.get(parameterName);
}

function getOrderId() {
  //fonction pour afficher l'article souhaiter avec le parametre URL
  const id = getParameter("orderId");

  fetch("http://localhost:3000/api/cameras/" + orderId)
    .then((res) => res.json())
    .then((res) => {
      write_product(res);
    });
}
