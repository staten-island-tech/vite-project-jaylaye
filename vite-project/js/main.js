import "../styles/style.css";
import { menu } from "./menu";
import { DOMSelectors } from "./Dom";

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.btn');
  const themeButton = document.getElementById('theme');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const category = this.id.substring(3).toLowerCase(); // Extract category from button ID
      displayFoods(category);
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
      const cardHTML = `<div class="card" data-aos="flip-up">
        <p>${food.foodName}</p>
        <img src="${food.image}" alt="${food.foodName}">
        <p>$${food.price}</p>
      </div>`;

      DOMSelectors.box.insertAdjacentHTML("beforeend", cardHTML);
    });
  },

  filterAppetizers: function () {
    menu
      .filter((food) => food.category === "Appetizers")
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
      .filter((food) => food.category === "Soup")
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
      .filter((food) => food.category === "Salads")
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
      .filter((food) => food.category === "Main Dishes")
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
      .filter((food) => food.category === "Specials")
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
      .filter((food) => food.category === "Kids Menu")
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
      .filter((food) => food.category === "Chef Recommendations")
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
      .filter((food) => food.category === "Desserts")
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
      .filter((food) => food.category === "Alcoholic Beverages")
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

  filterNonAlcoholic: function () {
    menu
      .filter((food) => food.category === "Non Alcoholic Beverages")
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


  remove: function () {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.remove();
    });
  },
};

function displayFoods(category) {
  clearCards();
  if (category === 'all') {
    buttons.createCards();
  } else {
    buttons[`filter${capitalizeFirstLetter(category)}`]();
  }
}

function clearCards() {
  const container = DOMSelectors.box;
  container.innerHTML = '';
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toggleTheme() {
  setTimeout(() => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark-theme");
  }, 0);
}

buttons.createCards();

// Add event listeners for category buttons
DOMSelectors.btn1.addEventListener("click", function () {
  buttons.remove();
  displayFoods('appetizers');
});

DOMSelectors.btn2.addEventListener("click", function () {
  buttons.remove();
  displayFoods('soup');
});

DOMSelectors.btn3.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Salads');
});

DOMSelectors.btn4.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Main Dishes');
});

DOMSelectors.btn5.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Specials');
});

DOMSelectors.btn6.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Side Dishes');
});

DOMSelectors.btn7.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Kids Menu');
});

DOMSelectors.btn8.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Chefs Recommendation');
});

DOMSelectors.btn9.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Dessert');
});

DOMSelectors.btn10.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Non-Alcoholic Beverages');
});

DOMSelectors.btn11.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Alcoholic Beverages');
});
