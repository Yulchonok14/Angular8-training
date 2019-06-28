var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var operators_1 = require('rxjs/operators');
var DataStorageService = (function () {
    function DataStorageService(http, recipeService, authService) {
        this.http = http;
        this.recipeService = recipeService;
        this.authService = authService;
    }
    DataStorageService.prototype.storeRecipes = function () {
        //const token = this.authService.getToken();
        this.http.put('https://recipe-book-f67d8.firebaseio.com/recipes.json', this.recipeService.getRecipes())
            .subscribe(function (response) {
            console.log(response);
        });
        //axamit
        /*return this.http.put('https://ng-recipe-book-5b039.firebaseio.com/recipes.json',
         this.recipeService.getRecipe());
         */
    };
    DataStorageService.prototype.fetchRecipes = function () {
        //const token = this.authService.getToken();
        var _this = this;
        return this.http
            .get('https://recipe-book-f67d8.firebaseio.com/recipes.json')
            .pipe(operators_1.map(function (recipes) {
            return recipes.map(function (recipe) {
                return {
                    id: recipe.id,
                    name: recipe.name,
                    description: recipe.description,
                    imagePath: recipe.imagePath,
                    ingredients: recipe.ingredients ? recipe.ingredients : []
                };
            });
            /*for (let recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
            return recipes;*/
        }), operators_1.tap(function (recipes) {
            _this.recipeService.setRecipe(recipes);
        }));
        //axamit
        /*return this.http.get('https://ng-recipe-book-5b039.firebaseio.com/recipes.json')
         .pipe(map(
         (response: Response) => {
         const recipes: Recipe[] = response.json();
         for(let recipe of recipes){
         if(!recipe['ingredients']) {
         recipe['ingredients'] = [];
         }
         }
         return recipes;
         }
         ))
         .subscribe(
         (recipes: Recipe[]) => {
         this.recipeService.setRecipe(recipes);
         }
         );*/
    };
    DataStorageService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], DataStorageService);
    return DataStorageService;
})();
exports.DataStorageService = DataStorageService;
//# sourceMappingURL=data-storage.service.js.map