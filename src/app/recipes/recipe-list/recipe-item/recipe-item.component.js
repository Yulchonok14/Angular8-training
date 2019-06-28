var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var RecipeItemComponent = (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], RecipeItemComponent.prototype, "recipeItem");
    RecipeItemComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-item',
            templateUrl: './recipe-item.component.html',
            styleUrls: ['./recipe-item.component.css']
        })
    ], RecipeItemComponent);
    return RecipeItemComponent;
})();
exports.RecipeItemComponent = RecipeItemComponent;
//# sourceMappingURL=recipe-item.component.js.map