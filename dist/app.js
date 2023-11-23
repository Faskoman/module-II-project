let recipes = [];
const storedRecipes = sessionStorage.getItem("recipes");
if (storedRecipes) {
    recipes = JSON.parse(storedRecipes);
}
