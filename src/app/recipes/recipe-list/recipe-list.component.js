var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var RecipeListComponent = (function () {
    function RecipeListComponent(recipeService, router, route, dataStorageService) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
        this.dataStorageService = dataStorageService;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        //this.recipes = this.recipeService.getRecipe();
        var _this = this;
        this.dataStorageService.fetchRecipes().subscribe();
        this.subscription = this.recipeService.recipesChanged.
            subscribe(function (recipes) {
            _this.recipes = recipes;
        });
    };
    RecipeListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RecipeListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RecipeListComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-list',
            templateUrl: './recipe-list.component.html',
            styleUrls: ['./recipe-list.component.css']
        })
    ], RecipeListComponent);
    return RecipeListComponent;
})();
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map