var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
var RecipesComponent = (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () {
        console.log(rxjs_1.of(1, 2, 3).subscribe());
    };
    RecipesComponent = __decorate([
        core_1.Component({
            selector: 'app-recipes',
            templateUrl: './recipes.component.html',
            styleUrls: ['./recipes.component.css']
        })
    ], RecipesComponent);
    return RecipesComponent;
})();
exports.RecipesComponent = RecipesComponent;
//# sourceMappingURL=recipes.component.js.map