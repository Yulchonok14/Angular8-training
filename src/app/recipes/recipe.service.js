var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var RecipeService = (function () {
    function RecipeService(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.recipesChanged = new Subject_1.Subject();
        this.recipes = [];
    }
    RecipeService.prototype.getRecipeById = function (id) {
        return this.recipes.filter(function (recipe) { return recipe.id === id; })[0];
    };
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.addRecipe = function (newRecipe) {
        newRecipe.id = this.recipes.length + 1;
        this.recipes.push(newRecipe);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.updateRecipe = function (id, recipe) {
        this.recipes[id - 1] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.addIngredientToShoppingList = function (ingredients) {
        this.shoppingListService.onAddIngredients(ingredients);
    };
    RecipeService.prototype.removeRecipe = function (id) {
        var index = this.recipes.map(function (recipe) { return recipe.id; }).indexOf(id);
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.setRecipe = function (recipes) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService = __decorate([
        core_1.Injectable()
    ], RecipeService);
    return RecipeService;
})();
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map