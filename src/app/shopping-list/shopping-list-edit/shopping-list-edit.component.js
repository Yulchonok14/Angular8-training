var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var ingredient_model_1 = require('../../shared/ingredient.model');
var ShoppingListEditComponent = (function () {
    function ShoppingListEditComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.editMode = false;
    }
    ShoppingListEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.shoppingListService.startedEditing.subscribe(function (index) {
            _this.editMode = true;
            _this.editedItemIndex = index;
            _this.editedItem = _this.shoppingListService.getIngredient(index);
            _this.shoppingListForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    ShoppingListEditComponent.prototype.onSubmit = function (form) {
        var formValue = form.value;
        var newIngredient = new ingredient_model_1.Ingredient(formValue.name, formValue.amount);
        if (this.editMode) {
            this.shoppingListService.onUpdateIngredient(this.editedItemIndex, newIngredient);
        }
        else {
            this.shoppingListService.onAddIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    };
    ShoppingListEditComponent.prototype.onClear = function () {
        this.shoppingListForm.reset();
        this.editMode = false;
    };
    ShoppingListEditComponent.prototype.onDelete = function () {
        this.onClear();
        this.shoppingListService.onDeleteIngredient(this.editedItemIndex);
    };
    ShoppingListEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        core_1.ViewChild('f')
    ], ShoppingListEditComponent.prototype, "shoppingListForm");
    ShoppingListEditComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-list-edit',
            templateUrl: './shopping-list-edit.component.html',
            styleUrls: ['./shopping-list-edit.component.css']
        })
    ], ShoppingListEditComponent);
    return ShoppingListEditComponent;
})();
exports.ShoppingListEditComponent = ShoppingListEditComponent;
//# sourceMappingURL=shopping-list-edit.component.js.map