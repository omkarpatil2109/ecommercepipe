const products = [
  { id: 1, name: "T-shirt", price: 499, img: "https://via.placeholder.com/200x150" },
  { id: 2, name: "Shoes", price: 999, img: "https://via.placeholder.com/200x150" },
  { id: 3, name: "Jeans", price: 799, img: "https://via.placeholder.com/200x150" },
];

let cartCount = 0;

function renderProducts() {
  const container = document.getElementById("product-list");
  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

function viewCart() {
  alert(`You have ${cartCount} item(s) in your cart.`);
}

renderProducts();
