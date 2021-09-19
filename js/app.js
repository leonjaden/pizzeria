let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
}

window.onscroll = () => {
  shoppingCart.classList.remove("active");
}