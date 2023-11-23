import { DifficultyType, recipes, RecipeType } from "./recipes.js";

const recipeForm = document.forms.namedItem("add-recipe");

recipeForm?.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);

  recipes.push({
    Name: getRequiredString(formData, "recipeName"),
    Type: parseType(getRequiredString(formData, "recipeType")),
    Ingredients: [],
    Description: getRequiredString(formData, "recipeDescription"),
    Difficulty: parseDifficultyType(getRequiredString(formData, "recipeDifficulty")),
    DurationInMinutes: Number(formData.get("recipeDuration")),
    isStared: false,
  });

  console.log(recipes);
});

function getString(formData: FormData, key: string) {
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

function getRequiredString(formData: FormData, key: string) {
  const value = getString(formData, key);

  if (!value) {
    throw new Error(`Value for ${key} is required!`);
  }

  return value;
}

function parseType(value: string): RecipeType {
  if (
    value !== "Appetizer" &&
    value !== "Salad" &&
    value !== "Main Course" &&
    value !== "Dessert"
  ) {
    throw new Error(`Invalid recipe type: ${value}`);
  }

  return value;
}

function parseDifficultyType(value: string): DifficultyType {
  if (
    value !== "Beginner" &&
    value !== "Cook" &&
    value !== "Culinarian" &&
    value !== "Chef"
  ) {
    throw new Error(`Invalid difficullty type: ${value}`);
  }

  return value;
}