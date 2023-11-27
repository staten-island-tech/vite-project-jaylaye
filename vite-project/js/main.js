import "../styles/style.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { menu } from "./menu";
import { DOMselectors } from "./Dom";

// AOS.init();

function clearCards(){
  const container = DOMselectors.container;
  container.innerHTML = '';
}
function foods(){
  clearCards();
  const appetizers = menu.filter((menu) => menu.type===
  <div class="card">
  <img class="card-img" src="${menu.image}" alt="">
    <h2>${menu.foodName}</h2>
  <p>${menu.price}</p>
  ')
  );
  }
