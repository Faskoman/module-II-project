type RecipeType = "Appetizer" | "Main Course" | "Dessert";

type DifficultyType = "Beginner" | "Amateur" | "Chef";

type Ingredient = string;

type Recipe = {
  Name: string;
  Type: RecipeType;
  Ingredients: Ingredient[];
  Difficulty: DifficultyType;
  DurationInMinutes: number;
  isStared: boolean;
};

let recipes: Recipe[] = [];
