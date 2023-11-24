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
  isMine: boolean;
};

export let recipes: Recipe[] = [
  {
    Name: "Southern Fried Shrimp",
    Type: "Main Course",
    Ingredients: [
      "1 pound jumbo shrimp",
      "1 cup buttermilk",
      "2 cups all purpose flour",
      "1.5 tablespoons Old Bay Seasoning",
      "4 cups vegetable oil",
      "Cocktail Sauce",
      "White Barbecue Sauce",
    ],
    Description:
      "Peel and devein shrimp. Pour buttermilk into a bowl.\nMix flour and Old Bay Seasoning in a gallon zip top baggie or a bowl.\nDip shrimp in buttermilk and shake off excess.\nDrop 4 or 5 shrimp into seasoned flour.\nZip bag and shake to coat shrimp, or dredge through flour coating all sides.\nShake off additional flour and place battered shrimp on a clean baking sheet.\nHeat oil into a dutch oven or heavy bottom pan over high heat until it reaches 350°.Fry shrimp, a few at a time for 1-2 minutes or until golden brown and reaches at least 145° internal temperature.\nUse a spider strainer or slotted spoon to remove shrimp from hot oil.",
    Difficulty: "Cook",
    DurationInMinutes: 20,
    isStared: false,
    isMine: false,
  },
  {
    Name: "Pasta Bolognese",
    Type: "Main Course",
    Ingredients: [
      "1 tablespoon olive oil",
      "1 onion",
      "3 celery sticks",
      "2 carrot sticks",
      "2 garlic cloves",
      "1 pound lean ground beef",
      "½ teaspoon salt",
      "½ teaspoon black pepper",
      "1 cup whole milk",
      "450g can crushed tomatoes",
      "2 tablespoons tomato paste",
      "1 bay leaf",
      "1 teaspoon oregano",
      "¼ teaspoon nutmeg",
      "450g Pasta",
      "Chopped parsley",
    ],
    Description:
      "Heat the olive oil in a large, heavy-bottomed pot over medium heat. Add the onions, celery, carrots and garlic, and sauté for a few minutes until the vegetables soften.\nAdd the beef and season with salt and pepper. Break up the ground beef and cook until it's browned and crumbled. stirring occasionally.\nAdd the milk and allow it to simmer until it has mostly evaporated, stirring occasionally, in order to help tenderize the beef, about 10 minutes.\nAdd crushed tomatoes, tomato paste, bay leaf, oregano and nutmeg.\nMix to combine, bring mixture to a boil and then simmer on low uncovered for at least 30 minutes, but preferably 1-2 hours. Simmering for longer will enhance the flavor.\nRemove from heat and remove the bay leaf.\nWhen ready to serve, bring a large pot of salted water to a boil.\nServe the cooked pasta in individual bowls and spoon the Bolognese sauce over it. Garnish with freshly chopped parsley and grated Parmesan cheese, if desired.",
    Difficulty: "Culinarian",
    DurationInMinutes: 120,
    isStared: true,
    isMine: false,
  },
  {
    Name: "Caesar salad",
    Type: "Salad",
    Ingredients: [
      "1 large head of romaine lettuce",
      "Parmesan cheese",
      "Crisp croutons",
      "minced garlic",
      "dijon",
      "Worcestershire",
      "Lemon juice",
      "red wine",
      "1/2 teaspoon salt",
      "1/8 teaspoon black pepper",
      "2 tablespoons tomato paste",
    ],
    Description:
      "Whisk together minced garlic, dijon, Worcestershire, lemon juice and red wine vinegar.\nWhisking while adding oil emulsifies the dressing for a smooth and creamy (not oily) consistency.\nSeason with 1/2 tsp salt and 1/8 tsp black pepper, or to taste..\nIn a large mixing bowl, combine all of your ingredients and toss gently to coat the lettuce in caesar dressing.",
    Difficulty: "Beginner",
    DurationInMinutes: 10,
    isStared: true,
    isMine: false,
  },
];

export function addRecipe(recipe: Recipe) {
  recipes.push(recipe);
  sessionStorage.setItem("recipes", JSON.stringify(recipes));
}

export const storedRecipes = sessionStorage.getItem("recipes");

if (storedRecipes) {
  recipes = JSON.parse(storedRecipes);
}

export let staredRecipes = recipes.filter((recipe) => recipe.isStared);

export let myRecipes = recipes.filter((recipe) => recipe.isMine);