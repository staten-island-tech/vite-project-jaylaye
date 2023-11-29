import "../styles/style.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { menu } from "./menu";
import { DOMselectors } from "./Dom";

// AOS.init();
const buttons = {
  createCards: function () {
    menu.forEach((food) => {
      const cardHTML = `<div class="card" data-aos="flip-up">
        <p>${food.foodName}</p>
        <img src="${food.image}" alt="${food.foodName}">
        <p>$${food.price}</p>
      </div>`;

      console.log(cardHTML);

      DOMselectors.box.insertAdjacentHTML("beforeend", cardHTML);
    });
  },
};

buttons.createCards();


function clearCards() {
  const container = DOMselectors.box;
  container.innerHTML = '';
}

function displayFoods() {
  clearCards();
  const appetizers = menu
    .filter((menu) => menu.type === "app") 
    .forEach((menu) =>
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
          <img class="card-img" src="${menu.image}" alt="${menu.foodName}">
          <h2>${menu.foodName}</h2>
          <p>${menu.price}</p>
        </div>`
      )
    );
}


displayFoods();


