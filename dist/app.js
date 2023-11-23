import { recipes } from "./recipes.js";
const recipeForm = document.forms.namedItem("add-recipe");
const messagesPopUp = document.getElementById("messages");
recipeForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    recipes.push({
        Name: getRequiredString(formData, "recipeName"),
        Type: parseType(getRequiredString(formData, "recipeType")),
        Ingredients: [],
        Description: getRequiredString(formData, "recipeDescription"),
        Difficulty: parseDifficultyType(getRequiredString(formData, "recipeDifficulty")),
        DurationInMinutes: Number(formData.get("recipeDuration")),
        isStared: false,
        isMine: true,
    });
    console.log("All recipes:", recipes);
    sessionStorage.setItem("recipes", JSON.stringify(recipes));
    recipeForm.reset();
    unHideDisplay(messagesPopUp);
    setTimeout(() => hideDisplay(messagesPopUp), 5000);
});
const allRecipesDisplay = document.getElementById("all-recipes");
const unfoldButtonsArray = Array.from(document.querySelectorAll(".unfold-button"));
unfoldButtonsArray.forEach((button) => {
    button.addEventListener("click", function () {
        toggleHideDisplay(...unfoldButtonsArray);
    });
});
function displayAllRecipes() {
    allRecipesDisplay.innerHTML = "";
    recipes.forEach((recipe) => {
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
    <button class="unfold-button">
    Ingredients: 
    <p class="--display-none">
    ${recipe.Ingredients.join(", ")}
    </p>
    </button>`;
        const recipeDescription = document.createElement("div");
        recipeDescription.innerHTML = `
    <button class="unfold-button">
    Description: 
    <p class="--display-none">
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
        allRecipesDisplay.appendChild(recipeContainer);
    });
}
displayAllRecipes();
function getString(formData, key) {
    const value = formData.get(key);
    if (value == null) {
        throw new Error(`Field ${key} doesn't exist!`);
    }
    if (typeof value !== "string") {
        throw new Error(`Value of field ${key} is not a string!`);
    }
    if (!value) {
        return undefined;
    }
    return value;
}
function getRequiredString(formData, key) {
    const value = getString(formData, key);
    if (!value) {
        throw new Error(`Value for ${key} is required!`);
    }
    return value;
}
function parseType(value) {
    if (value !== "Appetizer" &&
        value !== "Salad" &&
        value !== "Main Course" &&
        value !== "Dessert") {
        throw new Error(`Invalid recipe type: ${value}`);
    }
    return value;
}
function parseDifficultyType(value) {
    if (value !== "Beginner" &&
        value !== "Cook" &&
        value !== "Culinarian" &&
        value !== "Chef") {
        throw new Error(`Invalid difficullty type: ${value}`);
    }
    return value;
}
function hideDisplay(...elements) {
    elements.forEach((element) => {
        if (element) {
            element.classList.add("--display-none");
        }
    });
}
function unHideDisplay(...elements) {
    elements.forEach((element) => {
        if (element) {
            element.classList.remove("--display-none");
        }
    });
}
function toggleHideDisplay(...elements) {
    elements.forEach((element) => {
        if (element) {
            element.classList.toggle("--display-none");
        }
    });
}
