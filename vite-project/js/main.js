import "../styles/style.css";
import { menu } from "./menu";
import { DOMSelectors } from "./Dom";

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.btn');
  const themeButton = document.getElementById('theme');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const category = this.id.substring(3).toLowerCase();
      
    });
  });

  themeButton.addEventListener("click", function (e) {
    e.preventDefault();
    toggleTheme();
  });
});

const buttons = {
  createCards: function () {
    menu.forEach((food) => {
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="card" data-aos="flip-up">
          <p>${food.foodName}</p>
          <img src="${food.image}" alt="food" style="width: 100px; height: 100px;"></img>
          <p>$${food.price}</p> 
        </div>`
      );
    });
  },
  filterAppetizers: function () {
    menu
      .filter((food) => food.category.includes("Appetizers"))
      .forEach((food) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <p>${food.foodName}</p>
            <img src="${food.image}" alt="${food.foodName}">
            <p>$${food.price}</p>
          </div>`
        );
      });
  },
  
  filterSoup: function () {
    menu
      .filter((food) => food.category.includes("Soup"))
      .forEach((food) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <p>${food.foodName}</p>
            <img src="${food.image}" alt="${food.foodName}">
            <p>$${food.price}</p>
          </div>`
        );
      });
  },
  
  filterSalads: function () {
    menu
      .filter((food) => food.category.includes("Salads"))
      .forEach((food) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <p>${food.foodName}</p>
            <img src="${food.image}" alt="${food.foodName}">
            <p>$${food.price}</p>
          </div>`
        );
      });
  },
  
  filterMainDishes: function () {
    menu
      .filter((food) => food.category.includes("Main"))
      .forEach((food) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <p>${food.foodName}</p>
            <img src="${food.image}" alt="${food.foodName}">
            <p>$${food.price}</p>
          </div>`
        );
      });
  },
  
  filterSpecials: function () {
    menu
      .filter((food) => food.category.includes("Special"))
      .forEach((food) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <p>${food.foodName}</p>
            <img src="${food.image}" alt="${food.foodName}">
            <p>$${food.price}</p>
          </div>`
        );
      });
  },
  
  filterSideDishes: function () {
    menu
      .filter((food) => food.category.includes("Side"))
      .forEach((food) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <p>${food.foodName}</p>
            <img src="${food.image}" alt="${food.foodName}">
            <p>$${food.price}</p>
          </div>`
        );
      });
  },
  

  filterKidsMenu: function () {
    menu
      .filter((food) => food.category.includes("Kids Menu"))
      .forEach((food) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <p>${food.foodName}</p>
            <img src="${food.image}" alt="${food.foodName}">
            <p>$${food.price}</p>
          </div>`
        );
      });
  },
  
  filterDesserts: function () {
    menu
      .filter((food) => food.category.includes("Desserts"))
      .forEach((food) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <p>${food.foodName}</p>
            <img src="${food.image}" alt="${food.foodName}">
            <p>$${food.price}</p>
          </div>`
        );
      });
  },
    
  filterChefRecommendations: function () {
    menu
      .filter((food) => food.chefsRec)
      .forEach((food) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <p>${food.foodName}</p>
            <img src="${food.image}" alt="${food.foodName}">
            <p>$${food.price}</p>
          </div>`
        );
      });
  },
  
  filterAlcoholicBeverages: function () {
    menu
      .filter((food) => food.category.includes("Alcoholic Beverages"))
      .forEach((food) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <p>${food.foodName}</p>
            <img src="${food.image}" alt="${food.foodName}">
            <p>$${food.price}</p>
          </div>`
        );
      });
  },
  
  filterDrinks: function () {
    menu
      .filter((food) => food.category.includes("Drinks"))
      .forEach((food) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <p>${food.foodName}</p>
            <img src="${food.image}" alt="${food.foodName}">
            <p>${food.price}</p>
            <h3>${food.categories}</h3>
          </div>`
        );
      });
  },
  

  remove: function () {
    let cards = document.querySelectorAll(".card");
    cards.forEach((cards) => {
      cards.remove();
    });
  },
};

function clearCards() {
  const container = DOMSelectors.box;
  container.cardsHTML = '';
}

function toggleTheme() {
  setTimeout(() => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark-theme");
  }, 0);
}

buttons.createCards();

// Add event listeners for category buttons
DOMSelectors.button1.addEventListener("click", function () {
  buttons.remove();
  buttons.filterAppetizers();
});

DOMSelectors.button2.addEventListener("click", function () {
  buttons.remove();
  buttons.filterSoup();
});

DOMSelectors.button3.addEventListener("click", function () {
  buttons.remove();
  buttons.filterSalads();
});

DOMSelectors.button4.addEventListener("click", function () {
  buttons.remove();
  buttons.filterMainDishes();
});

DOMSelectors.button5.addEventListener("click", function () {
  buttons.remove();
  buttons.filterSpecials();
});

DOMSelectors.button6.addEventListener("click", function () {
  buttons.remove();
  buttons.filterSideDishes();
});

DOMSelectors.button7.addEventListener("click", function () {
  buttons.remove();
  buttons.filterKidsMenu();
});

DOMSelectors.button8.addEventListener("click", function () {
  buttons.remove();
  buttons.filterChefRecommendations();
});


DOMSelectors.button9.addEventListener("click", function () {
  buttons.remove();
  buttons.filterDesserts();
});

DOMSelectors.button10.addEventListener("click", function () {
  buttons.remove();
  buttons.filterDrinks();
});

DOMSelectors.button11.addEventListener("click", function () {
  buttons.remove();
  buttons.filterAlcoholicBeverages();
});

console.log(menu);