var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var RecipeResolverService = (function () {
    function RecipeResolverService(dataStorageService, recipeService) {
        this.dataStorageService = dataStorageService;
        this.recipeService = recipeService;
    }
    RecipeResolverService.prototype.resolve = function (route, state) {
        var recipes = this.recipeService.getRecipes();
        if (recipes.length === 0) {
            return this.dataStorageService.fetchRecipes();
        }
        else {
            return recipes;
        }
    };
    RecipeResolverService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], RecipeResolverService);
    return RecipeResolverService;
})();
exports.RecipeResolverService = RecipeResolverService;
//# sourceMappingURL=recipe-resolver.service.js.map