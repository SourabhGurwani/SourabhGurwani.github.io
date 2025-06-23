let cart = {};

const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

const showProducts = () => {
  let str = "<div class='row'>";
  products.map((value) => {
    str += `<div>
      <h3>${value.name}</h3>
      <h4>$${value.price}</h4>
      <button onclick='addToCart(${value.id})'>Add to Cart</button>
    </div>`;
  });
  str += "</div>";
  document.getElementById("root").innerHTML = str;
};

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  alert(`Added Product ${id} to cart`);
}

function increment(id) {
  cart[id] += 1;
  showCart();
}

function decrement(id) {
  if (cart[id] > 1) {
    cart[id] -= 1;
  } else {
    delete cart[id]; // Remove if quantity is 0
  }
  showCart();
}

function showCart() {
  let str = "<h2>Your Cart</h2><ul>";
  let total = 0;

  products.map((value) => {
    const qty = cart[value.id] || 0;
    if (qty > 0) {
      const subTotal = value.price * qty;
      total += subTotal;
      str += `<li>
        ${value.name} - $${value.price} 
        <button onclick="decrement(${value.id})">-</button> 
        ${qty} 
        <button onclick="increment(${value.id})">+</button> 
        = $${subTotal}
      </li>`;
    }
  });

  str += `</ul><h3>Total Order Value: $${total}</h3>`;
  document.getElementById("root").innerHTML = str;
}
