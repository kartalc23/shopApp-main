if (productName != "" && productPrice != "" && productDescription != "") {
  
  productName.value = "";
  productPrice.value = "";
  productDescription.value = "";

  alert("Ürün eklendi.");
}










if (products === null) {
  const productArray = [];
  productArray.push(product);
  localStorage.setItem("products", JSON.stringify(productArray));
} else {
  const productArray = JSON.parse(products);
  productArray.push(product);
  localStorage.setItem("products", JSON.stringify(productArray));
}