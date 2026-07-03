// ==============================
// Recipe Database
// ==============================
const recipes = {
  Indian: {
    "Butter Chicken": {
      prepTime: "20 mins",
      cookTime: "40 mins",
      ingredients: [
        "500g Chicken",
        "2 Tomatoes",
        "1 Onion",
        "Butter",
        "Fresh Cream",
        "Ginger-Garlic Paste",
        "Garam Masala",
        "Red Chili Powder",
        "Salt"
      ],
      steps: [
        "Marinate chicken with spices.",
        "Cook chicken until lightly browned.",
        "Prepare tomato and onion gravy.",
        "Add butter and cream to the gravy.",
        "Mix chicken into the gravy.",
        "Cook for 10 minutes and serve with naan or rice."
      ]
    },

    "Paneer Butter Masala": {
      prepTime: "15 mins",
      cookTime: "30 mins",
      ingredients: [
        "250g Paneer",
        "2 Tomatoes",
        "Butter",
        "Cream",
        "Onion",
        "Cashews",
        "Garam Masala",
        "Salt"
      ],
      steps: [
        "Prepare tomato-cashew gravy.",
        "Cook onions until golden.",
        "Blend into a smooth paste.",
        "Add butter and spices.",
        "Add paneer cubes.",
        "Cook for 8 minutes and garnish with cream."
      ]
    },

    "Chole Bhature": {
      prepTime: "30 mins",
      cookTime: "35 mins",
      ingredients: [
        "Boiled Chickpeas",
        "Onion",
        "Tomatoes",
        "Ginger",
        "Garlic",
        "Chole Masala",
        "Flour",
        "Curd",
        "Salt"
      ],
      steps: [
        "Prepare spicy chickpea curry.",
        "Mix flour into dough.",
        "Rest dough for 2 hours.",
        "Roll into circles.",
        "Deep fry until puffed.",
        "Serve hot with chole."
      ]
    },

    "Masala Dosa": {
      prepTime: "20 mins",
      cookTime: "25 mins",
      ingredients: [
        "Dosa Batter",
        "Potatoes",
        "Onion",
        "Mustard Seeds",
        "Curry Leaves",
        "Turmeric",
        "Oil",
        "Salt"
      ],
      steps: [
        "Prepare potato filling.",
        "Heat dosa pan.",
        "Spread batter thinly.",
        "Cook until crispy.",
        "Fill with potato masala.",
        "Fold and serve with chutney."
      ]
    },

    "Biryani": {
      prepTime: "30 mins",
      cookTime: "45 mins",
      ingredients: [
        "Basmati Rice",
        "Chicken",
        "Onion",
        "Curd",
        "Biryani Masala",
        "Mint",
        "Coriander",
        "Saffron",
        "Ghee"
      ],
      steps: [
        "Marinate chicken.",
        "Cook rice until 70% done.",
        "Layer rice and chicken.",
        "Add saffron milk.",
        "Cook on low flame (dum).",
        "Serve hot with raita."
      ]
    }
  },

  Italian: {
    "Margherita Pizza": {
      prepTime: "20 mins",
      cookTime: "20 mins",
      ingredients: [
        "Pizza Dough",
        "Tomato Sauce",
        "Mozzarella",
        "Basil Leaves",
        "Olive Oil"
      ],
      steps: [
        "Roll the pizza dough.",
        "Spread tomato sauce.",
        "Add mozzarella cheese.",
        "Bake for 15-20 minutes.",
        "Top with basil and olive oil."
      ]
    },

    "Pasta Alfredo": {
      prepTime: "10 mins",
      cookTime: "20 mins",
      ingredients: [
        "Pasta",
        "Butter",
        "Cream",
        "Parmesan Cheese",
        "Garlic",
        "Black Pepper"
      ],
      steps: [
        "Boil pasta.",
        "Prepare creamy Alfredo sauce.",
        "Mix pasta into sauce.",
        "Add parmesan cheese.",
        "Serve hot."
      ]
    },

    "Lasagna": {
      prepTime: "30 mins",
      cookTime: "45 mins",
      ingredients: [
        "Lasagna Sheets",
        "Cheese",
        "Tomato Sauce",
        "Minced Meat",
        "Onion",
        "Garlic"
      ],
      steps: [
        "Prepare meat sauce.",
        "Layer sheets and sauce.",
        "Add cheese.",
        "Repeat layers.",
        "Bake until golden."
      ]
    },

    "Risotto": {
      prepTime: "15 mins",
      cookTime: "35 mins",
      ingredients: [
        "Arborio Rice",
        "Vegetable Stock",
        "Butter",
        "Parmesan",
        "Onion",
        "Mushrooms"
      ],
      steps: [
        "Cook onions.",
        "Add rice.",
        "Gradually add stock.",
        "Cook until creamy.",
        "Mix butter and parmesan."
      ]
    },

    "Bruschetta": {
      prepTime: "10 mins",
      cookTime: "5 mins",
      ingredients: [
        "Bread",
        "Tomatoes",
        "Garlic",
        "Olive Oil",
        "Basil"
      ],
      steps: [
        "Toast bread slices.",
        "Mix tomatoes with basil.",
        "Rub garlic on bread.",
        "Top with tomato mixture.",
        "Drizzle olive oil."
      ]
    }
  },

  Chinese: {
    "Fried Rice": {
      prepTime: "10 mins",
      cookTime: "20 mins",
      ingredients: [
        "Rice",
        "Carrot",
        "Beans",
        "Capsicum",
        "Soy Sauce",
        "Spring Onion"
      ],
      steps: [
        "Heat oil.",
        "Cook vegetables.",
        "Add rice.",
        "Mix soy sauce.",
        "Serve hot."
      ]
    },

    "Hakka Noodles": {
      prepTime: "10 mins",
      cookTime: "15 mins",
      ingredients: [
        "Noodles",
        "Capsicum",
        "Carrot",
        "Cabbage",
        "Soy Sauce",
        "Vinegar"
      ],
      steps: [
        "Boil noodles.",
        "Stir-fry vegetables.",
        "Add noodles.",
        "Mix sauces.",
        "Serve immediately."
      ]
    },

    "Manchurian": {
      prepTime: "20 mins",
      cookTime: "20 mins",
      ingredients: [
        "Cabbage",
        "Carrot",
        "Corn Flour",
        "Soy Sauce",
        "Garlic",
        "Spring Onion"
      ],
      steps: [
        "Prepare vegetable balls.",
        "Deep fry them.",
        "Cook Manchurian sauce.",
        "Mix balls with sauce.",
        "Garnish with spring onion."
      ]
    },

    "Sweet and Sour Chicken": {
      prepTime: "20 mins",
      cookTime: "25 mins",
      ingredients: [
        "Chicken",
        "Bell Peppers",
        "Pineapple",
        "Tomato Ketchup",
        "Vinegar"
      ],
      steps: [
        "Fry chicken.",
        "Prepare sweet-sour sauce.",
        "Add vegetables.",
        "Mix chicken.",
        "Serve with rice."
      ]
    },

    "Spring Rolls": {
      prepTime: "20 mins",
      cookTime: "15 mins",
      ingredients: [
        "Spring Roll Sheets",
        "Vegetables",
        "Soy Sauce",
        "Oil"
      ],
      steps: [
        "Prepare filling.",
        "Fill sheets.",
        "Roll tightly.",
        "Deep fry until golden.",
        "Serve with sauce."
      ]
    }
  },

  Thai: {
    "Pad Thai": {
      prepTime: "15 mins",
      cookTime: "20 mins",
      ingredients: [
        "Rice Noodles",
        "Shrimp",
        "Peanuts",
        "Egg",
        "Bean Sprouts",
        "Fish Sauce"
      ],
      steps: [
        "Soak noodles.",
        "Cook shrimp.",
        "Add egg.",
        "Mix noodles and sauce.",
        "Top with peanuts."
      ]
    },

    "Green Curry": {
      prepTime: "15 mins",
      cookTime: "30 mins",
      ingredients: [
        "Green Curry Paste",
        "Chicken",
        "Coconut Milk",
        "Thai Basil",
        "Vegetables"
      ],
      steps: [
        "Cook curry paste.",
        "Add coconut milk.",
        "Cook chicken.",
        "Add vegetables.",
        "Serve with rice."
      ]
    },

    "Tom Yum Soup": {
      prepTime: "10 mins",
      cookTime: "20 mins",
      ingredients: [
        "Shrimp",
        "Lemongrass",
        "Mushrooms",
        "Lime",
        "Chili"
      ],
      steps: [
        "Boil broth.",
        "Add herbs.",
        "Cook shrimp.",
        "Add mushrooms.",
        "Finish with lime juice."
      ]
    },

    "Thai Basil Chicken": {
      prepTime: "15 mins",
      cookTime: "15 mins",
      ingredients: [
        "Chicken",
        "Thai Basil",
        "Garlic",
        "Chili",
        "Soy Sauce"
      ],
      steps: [
        "Cook garlic and chili.",
        "Add chicken.",
        "Mix sauces.",
        "Add basil.",
        "Serve hot."
      ]
    },

    "Mango Sticky Rice": {
      prepTime: "15 mins",
      cookTime: "25 mins",
      ingredients: [
        "Sticky Rice",
        "Coconut Milk",
        "Sugar",
        "Fresh Mango"
      ],
      steps: [
        "Cook sticky rice.",
        "Prepare coconut sauce.",
        "Mix rice with sauce.",
        "Serve with sliced mango."
      ]
    }
  }
};

// ==============================
// Functions
// ==============================

function selectCuisine(cuisine) {
  document.getElementById("cuisine-selection").classList.add("hidden");
  document.getElementById("dish-selection").classList.remove("hidden");

  document.getElementById("dish-title").innerText = cuisine + " Recipes";

  const dishOptions = document.getElementById("dish-options");
  dishOptions.innerHTML = "";

  for (let dish in recipes[cuisine]) {
    const button = document.createElement("button");
    button.innerText = dish;
    button.onclick = () => showRecipe(cuisine, dish);
    dishOptions.appendChild(button);
  }
}

function showRecipe(cuisine, dish) {
  const recipe = recipes[cuisine][dish];

  document.getElementById("dish-selection").classList.add("hidden");
  document.getElementById("recipe-detail").classList.remove("hidden");

  document.getElementById("recipe-name").innerText = dish;
  document.getElementById("prep-time").innerText = recipe.prepTime;
  document.getElementById("cook-time").innerText = recipe.cookTime;

  const ingredients = document.getElementById("ingredients");
  ingredients.innerHTML = "";
  recipe.ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredients.appendChild(li);
  });

  const steps = document.getElementById("steps");
  steps.innerHTML = "";
  recipe.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    steps.appendChild(li);
  });
}

function goBack() {
  document.getElementById("recipe-detail").classList.add("hidden");
  document.getElementById("dish-selection").classList.remove("hidden");
}