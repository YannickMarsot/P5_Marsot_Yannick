function getParameter(parameterName) {
  //fonction pour récupérer le paramétre d'une URL
  let parameter = new URLSearchParams(window.location.search);
  return parameter.get(parameterName);
}

function getOrderId() {
  //fonction pour afficher l'article souhaiter avec le parametre URL
  const orderId = getParameter("orderId");
  console.log(orderId);
  fetch("http://127.0.0.1:3000/api/cameras/order" + orderId)
    .then((res) => res.json())
    .then((res) => {
      write_product(res);
    });
}

getOrderId();
