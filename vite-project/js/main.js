import "../styles/style.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { menu } from "./menu";
import { DOMselectors } from "./Dom";

// AOS.init();
const buttons = {
  createCards: function () {
    menu.forEach((item) => {
      DOMselectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="card" data-aos="flip-up">
          <p>${item.foodName}</p>
          <img src="${item.image}" alt="${item.foodName}">
          <p>$${item.price}</p>
        </div>`
      );
    });
  },
};
console.log(foods);
foods.forEach((food)=>createCards(foods));

function clearCards(){
  const container = DOMselectors.container;
  container.innerHTML = '';
}
function foods(){
  clearCards();
  const appetizers = menu.filter((menu) => menu.type==="app").map((menu)=> DOMSelectors.container.insertAdjacentHTML("beforeend", 
   `<div class="card">
  <img class="card-img" src="${menu.image}" alt=""></img>
    <h2> ${menu.foodName} </h2>
  <p> ${menu.price} </p>
  </div>`
  )
  );
  }
