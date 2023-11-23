export type RecipeType = "Appetizer" | "Salad" | "Main Course" | "Dessert";

export type DifficultyType = "Beginner" | "Cook" | "Culinarian" | "Chef";

export type Ingredient = string;

export type Recipe = {
  Name: string;
  Type: RecipeType;
  Ingredients: Ingredient[];
  Description: string;
  Difficulty: DifficultyType;
  DurationInMinutes: number;
  isStared: boolean;
};

export let recipes: Recipe[] = [];

export const storedRecipes = sessionStorage.getItem("recipes");

if (storedRecipes) {
  recipes = JSON.parse(storedRecipes);
}