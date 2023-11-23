export let recipes = [];
export const storedRecipes = sessionStorage.getItem("recipes");
if (storedRecipes) {
    recipes = JSON.parse(storedRecipes);
}
