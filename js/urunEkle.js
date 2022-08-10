const form = document.getElementById("form");

function addProduct() {
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productDescription = document.getElementById("productDescription");

  const product = {
    name: productName.value,
    price: productPrice.value,
    description: productDescription.value,
    image: productImage.value,
  };
  const products = localStorage.getItem("products");
  if (products === null) {
    const productArray = [];
    productArray.push(product);
    localStorage.setItem("products", JSON.stringify(productArray));
  } else {
    const productArray = JSON.parse(products);
    productArray.push(product);
    localStorage.setItem("products", JSON.stringify(productArray));
  }

  if (productName != "" && productPrice != "" && productDescription != "") {
    productName.value = "";
    productPrice.value = "";
    productDescription.value = "";
    productImage.value = "";

    alert("Ürün eklendi.");
  }
}

removeItem = (index) => {
  const products = JSON.parse(localStorage.getItem("products"));
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  window.location.reload();
};

function listItem() {
  const li = document.createElement("li");
  li.classList.add("li");
  let storedProducts = localStorage.getItem("products");
  storedProducts = JSON.parse(storedProducts);
  const ul = document.getElementById("ul");

  for (let i = 0; i < storedProducts.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
    <b>Ürün Adı : </b>${storedProducts[i].name}<br>
    <b>Ürün Resim Url : </b>${storedProducts[i].image}<br>
    <b>Ürün Fiyatı : </b>${storedProducts[i].price}<br>
    <b>Ürün Açıklaması : </b>${storedProducts[i].description}<br>
    <button class="delBtn" onclick="removeItem()">Sil</button><br>`;
    ul.appendChild(li);
  }
}

form.addEventListener("submit", (e) => {
  addProduct();
});

listItem();
