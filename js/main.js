//Datos de las bebidas de temporada

const seasonalCoffees = [
  {
    title: "Iced Caramel Latte",
    img: "https://i.pinimg.com/1200x/eb/b2/2e/ebb22ee771064a957e8c99bd559250bc.jpg",
    desc:"Tiene un sabor suave y dulce, con el equilibrio perfecto entre la intensidad del café y la cremosidad de la leche. Es ideal para refrescarse en días calurosos y disfrutar de un toque dulce."
  },
  {
    title: "Vanilla Sweet Cream Cold Brew",
    img: "https://i.pinimg.com/1200x/19/8f/1a/198f1a08be08dcbd93619278962ffbd4.jpg",
    desc: "Se mezcla con crema dulce de vainilla, que aporta un toque cremoso y dulce. Es una opción refrescante y deliciosa para los amantes del café que buscan algo diferente."
  },
  {
    title: "Mocha Frappé",
    img: "https://coffeeclub.com.au/cdn/shop/files/Beverages_Product_Images_1200x1200_MochaFrappe_1080x.jpg?v=1716268834",
    desc: "Tiene un sabor intenso y dulce, donde se combina el amargor suave del café con la riqueza del cacao. Es perfecto para quienes disfrutan de una bebida indulgente y refrescante."
  }
];

let index = 0;

document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("tempImg");
  const title = document.getElementById("tempTitle");
  const desc = document.getElementById("tempDesc");
});


function renderCoffee() {
  const img = document.getElementById("tempImg");
  const title = document.getElementById("tempTitle");
  const desc = document.getElementById("tempDesc");

  img.src = seasonalCoffees[index].img;
  title.textContent = seasonalCoffees[index].title;
  desc.textContent = seasonalCoffees[index].desc;
}

document.querySelector(".next").onclick = () => {
  index = (index + 1) % seasonalCoffees.length;
  renderCoffee();
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + seasonalCoffees.length) % seasonalCoffees.length;
  renderCoffee();
};

renderCoffee();

