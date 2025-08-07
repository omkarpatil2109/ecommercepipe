const products = [
  {
    id: 1,
    name: "Basic T-shirt",
    price: 499,
    img: "https://via.placeholder.com/220x150.png?text=T-Shirt",
  },
  {
    id: 2,
    name: "Stylish Shoes",
    price: 1299,
    img: "https://via.placeholder.com/220x150.png?text=Shoes",
  },
  {
    id: 3,
    name: "Classic Jeans",
    price: 999,
    img: "https://via.placeholder.com/220x150.png?text=Jeans",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 1999,
    img: "https://via.placeholder.com/220x150.png?text=Watch",
  }
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

renderProducts();
