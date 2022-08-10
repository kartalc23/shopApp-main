function listItem() {
  let storedProducts = localStorage.getItem("products");
  storedProducts = JSON.parse(storedProducts);
  const ul = document.getElementById("ul");

  for (let i = 0; i < storedProducts.length; i++) {
    const li = document.createElement("li");
    li.classList.add("li");
    li.innerHTML = `<h4 class="urun-adi"> ${storedProducts[i].name}</h4> <img class="urun-img" src="${storedProducts[i].image}" alt=""> <h4 class="urun-fiyati">${storedProducts[i].price}</h4> <br>`;
    ul.appendChild(li);
  }
}

listItem();

// modal side

function getModalInfo() {
  const modal = document.getElementById("modal");
  modal.classList.add("active");

  let storedProducts = localStorage.getItem("products");
  storedProducts = JSON.parse(storedProducts);
  let div = document.createElement("div");
  div.classList.add("modal-content", "active");

  for (i = 0; i < storedProducts.length; i++) {
    div.innerHTML = `
    <div class="productImg">
      <img
        src="${storedProducts[i].image}"
        alt=""
      />
    </div>
    <div class="productInfo">
      <h2>${storedProducts[i].name}</h2>
      <p>${storedProducts[i].description}</p>
      <p>${storedProducts[i].price}</p>
    </div>
    `;
    modal.appendChild(div);
  }

  const closeModal = document.getElementById("close");
  closeModal.addEventListener("click", function () {
    modal.classList.remove("active");
    modal.removeChild(div);
  });
}

const openModal = document.querySelectorAll(".li");
openModal.forEach((e) => {
  e.addEventListener("click", () => {
    getModalInfo();
  });
});

document.body.addEventListener("click", (e) => {
  console.log(e.target);
});
