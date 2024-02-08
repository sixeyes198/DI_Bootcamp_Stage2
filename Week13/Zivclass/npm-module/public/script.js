// alert('hello from client')

function getUserInfo() {
  fetch("http://localhost:5000/users")
    .then((res) => res.json())
    .then((info) => {
      render(info);
    });
}

function getShop() {
  fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then((info) => {
        renderShop(info);
    });
}

function renderShop(arr) {
    const html = arr.map((item) => {
      return `<div>
          ${item.id} ${item.name} ${item.price}
          </div>`;
    });
    document.getElementById("root").innerHTML = html.join("");
  }
function render(arr) {
  const html = arr.map((item) => {
    return `<div>
        ${item.id} ${item.name} ${item.email}
        </div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
}
