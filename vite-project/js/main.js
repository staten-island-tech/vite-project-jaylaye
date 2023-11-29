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
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="inner" data-aos="flip-up">
          <p>${food.foodName}</p>
          <img src="${food.image}" alt="food" style="width: 100px; height: 100px;"></img>
          <p>$${food.price}</p> 
        </div>`
      );
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
// Add event listeners for category buttons
DOMSelectors.button1.addEventListener("click", function () {
  buttons.remove();
  displayFoods('appetizers');
});

DOMSelectors.button2.addEventListener("click", function () {
  buttons.remove();
  displayFoods('soup');
});

DOMSelectors.button3.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Salads');
});

DOMSelectors.button4.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Main Dishes');
});

DOMSelectors.button5.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Specials');
});

DOMSelectors.button6.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Side Dishes');
});

DOMSelectors.button7.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Kids Menu');
});

DOMSelectors.button8.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Chefs Recommendation');
});

DOMSelectors.button9.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Dessert');
});

DOMSelectors.button10.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Non-Alcoholic Beverages');
});

DOMSelectors.button11.addEventListener("click", function () {
  buttons.remove();
  displayFoods('Alcoholic Beverages');
});

console.log(menu);