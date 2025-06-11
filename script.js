let cart = [];
const cartItems = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ${item.price.toFixed(2)}
      <button onclick="removeFromCart(${i})">Remove</button>
    `;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPriceElement.textContent = total.toFixed(2);
}

function buyNow() {
  if (cart.length === 0) {
    alert("Cart is empty!");
  } else {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
  }
}
