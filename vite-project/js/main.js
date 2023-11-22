import "../styles/style.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { menu } from "./menu";
import { DOMselectors } from "./Dom";

AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    const appetizersButton = document.getElementById("btn");
    appetizersButton.addEventListener("click", function () {
        const appetizers = menu.filter(item => item.appetizer);
        console.log(appetizers);
    });
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
    },
)


DOMselectors.button1.addEventListener("click", buttons.createCards);

