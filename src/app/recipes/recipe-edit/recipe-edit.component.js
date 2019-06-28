var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var RecipeEditComponent = (function () {
    function RecipeEditComponent(router, route, recipeService) {
        this.router = router;
        this.route = route;
        this.recipeService = recipeService;
        this.editMode = false;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        var newRecipe = this.recipeForm.value;
        if (this.editMode) {
            newRecipe.id = this.id;
            this.recipeService.updateRecipe(this.id, newRecipe);
        }
        else {
            this.recipeService.addRecipe(newRecipe);
        }
        this.onCancel();
    };
    RecipeEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeEditComponent.prototype.getControls = function () {
        return this.recipeForm.get('ingredients').controls;
    };
    RecipeEditComponent.prototype.onAddIngredient = function () {
        this.recipeForm.get('ingredients').push(new forms_1.FormGroup({
            'name': new forms_1.FormControl(),
            'amount': new forms_1.FormControl()
        }));
    };
    RecipeEditComponent.prototype.onDeleteIngredient = function (index) {
        this.recipeForm.get('ingredients').removeAt(index);
    };
    RecipeEditComponent.prototype.initForm = function () {
        var recipeName = '';
        var recipeImagePath = '';
        var recipeDescr = '';
        var recipeIngredients = new forms_1.FormArray([]);
        if (this.editMode) {
            this.item = this.recipeService.getRecipeById(this.id);
            recipeName = this.item.name;
            recipeDescr = this.item.description;
            recipeImagePath = this.item.imagePath;
            if (this.item['ingredients']) {
                for (var _i = 0, _a = this.item.ingredients; _i < _a.length; _i++) {
                    var ingredient = _a[_i];
                    recipeIngredients.push(new forms_1.FormGroup({
                        'name': new forms_1.FormControl(ingredient.name, forms_1.Validators.required),
                        'amount': new forms_1.FormControl(ingredient.amount, [
                            forms_1.Validators.required,
                            forms_1.Validators.pattern(/^[1-9]+[0-9]*$/)
                        ])
                    }));
                }
            }
        }
        this.recipeForm = new forms_1.FormGroup({
            'name': new forms_1.FormControl(recipeName, forms_1.Validators.required),
            'imagePath': new forms_1.FormControl(recipeImagePath, forms_1.Validators.required),
            'description': new forms_1.FormControl(recipeDescr, forms_1.Validators.required),
            'ingredients': recipeIngredients
        });
    };
    RecipeEditComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-edit',
            styleUrls: ['./recipe-edit.component.css'],
            templateUrl: './recipe-edit.component.html'
        })
    ], RecipeEditComponent);
    return RecipeEditComponent;
})();
exports.RecipeEditComponent = RecipeEditComponent;
//# sourceMappingURL=recipe-edit.component.js.map