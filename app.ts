type RecipeType = "Appetizer" | "Salad" | "Main Course" | "Dessert";

type DifficultyType = "Beginner" | "Cook" | "Culinarian" | "Chef";

type Ingredient = string;

type Recipe = {
  Name: string;
  Type: RecipeType;
  Ingredients: Ingredient[];
  Description: string;
  Difficulty: DifficultyType;
  DurationInMinutes: number;
  isStared: boolean;
};

let recipes: Recipe[] = [];

const storedRecipes = sessionStorage.getItem("recipes");

if (storedRecipes) {
  recipes = JSON.parse(storedRecipes);
}
