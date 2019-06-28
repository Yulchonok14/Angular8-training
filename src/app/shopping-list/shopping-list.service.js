var ingredient_model_1 = require('../shared/ingredient.model');
var rxjs_1 = require("rxjs");
var ShoppingListService = (function () {
    function ShoppingListService() {
        this.ingredientsChanged = new rxjs_1.Subject();
        this.startedEditing = new rxjs_1.Subject();
        this.ingredients = [
            new ingredient_model_1.Ingredient('Apples', 5),
            new ingredient_model_1.Ingredient('Tomatoes', 10),
        ];
    }
    ShoppingListService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.onAddIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.onUpdateIngredient = function (index, ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.onDeleteIngredient = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.onAddIngredients = function (ingredients) {
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
        var _a;
    };
    return ShoppingListService;
})();
exports.ShoppingListService = ShoppingListService;
//# sourceMappingURL=shopping-list.service.js.map