import { staredRecipes } from "./recipes";
function displayRecipes(container, recipesToDisplay) {
    container.innerHTML = "";
    recipesToDisplay.forEach((recipe) => {
        const recipeContainer = document.createElement("div");
        recipeContainer.classList.add("recipe-container", "--card");
        const recipeName = document.createElement("h2");
        recipeName.classList.add("form__h2", "--center-text");
        recipeName.textContent = `${recipe.Name}`;
        const recipeType = document.createElement("p");
        recipeType.classList.add("--smaller-text", "--center-text");
        recipeType.textContent = `${recipe.Type}`;
        const recipeIngredients = document.createElement("div");
        recipeIngredients.innerHTML = `
      <button class="unfold-button --left-text">
      Ingredients: 
      <p class="--text-align-start --display-none">
      ${recipe.Ingredients.join(", ")}
      </p>
      </button>`;
        const recipeDescription = document.createElement("div");
        recipeDescription.innerHTML = `
      <button class="unfold-button">
      Description: 
      <p class="--text-align-start --display-none">
      ${recipe.Description}
      </p>
      </button>`;
        const recipeDifficulty = document.createElement("p");
        recipeDifficulty.textContent = `Difficulty: ${recipe.Difficulty}`;
        const recipeDuration = document.createElement("p");
        recipeDuration.textContent = `Duration: ${recipe.DurationInMinutes} minutes`;
        const isStared = document.createElement("div");
        isStared.classList.add("stared-div");
        recipeContainer.appendChild(recipeName);
        recipeContainer.appendChild(recipeType);
        recipeContainer.appendChild(recipeIngredients);
        recipeContainer.appendChild(recipeDescription);
        recipeContainer.appendChild(recipeDifficulty);
        recipeContainer.appendChild(recipeDuration);
        recipeContainer.appendChild(isStared);
        container.appendChild(recipeContainer);
    });
}
const staredRecipesDisplay = document.getElementById("stared-recipes");
document.addEventListener("DOMContentLoaded", function () {
    displayRecipes(staredRecipesDisplay, staredRecipes);
    const unfoldButtonsArray = Array.from(document.querySelectorAll(".unfold-button"));
    unfoldButtonsArray.forEach((button) => {
        button.addEventListener("click", function () {
            toggleHideDisplay(button.querySelector("p"));
        });
    });
});
function toggleHideDisplay(...elements) {
    elements.forEach((element) => {
        if (element) {
            element.classList.toggle("--display-none");
        }
    });
}
