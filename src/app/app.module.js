var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var http_2 = require('@angular/http');
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require('./app.component');
var shopping_list_component_1 = require('./shopping-list/shopping-list.component');
var shopping_list_edit_component_1 = require('./shopping-list/shopping-list-edit/shopping-list-edit.component');
var recipe_list_component_1 = require('./recipes/recipe-list/recipe-list.component');
var recipe_item_component_1 = require('./recipes/recipe-list/recipe-item/recipe-item.component');
var recipe_detail_component_1 = require('./recipes/recipe-detail/recipe-detail.component');
var header_component_1 = require('./header/header.component');
var recipes_component_1 = require('./recipes/recipes.component');
var recipe_edit_component_1 = require("./recipes/recipe-edit/recipe-edit.component");
var dropdown_directive_1 = require('./shared/dropdown.directive');
var signup_component_1 = require('./auth/signup/signup.component');
var signin_component_1 = require('./auth/signin/signin.component');
var shopping_list_service_1 = require("./shopping-list/shopping-list.service");
var recipe_service_1 = require("./recipes/recipe.service");
//import { DataStorageService } from "./shared/data-storage.service";
var auth_service_1 = require("./auth/auth.service");
var auth_guard_service_1 = require("./auth/auth-guard.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                shopping_list_component_1.ShoppingListComponent,
                shopping_list_edit_component_1.ShoppingListEditComponent,
                recipe_list_component_1.RecipeListComponent,
                recipe_item_component_1.RecipeItemComponent,
                recipe_detail_component_1.RecipeDetailComponent,
                header_component_1.HeaderComponent,
                recipes_component_1.RecipesComponent,
                recipe_edit_component_1.RecipeEditComponent,
                signup_component_1.SignupComponent,
                signin_component_1.SigninComponent,
                dropdown_directive_1.DropdownDirective
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: "my-app" }),
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_2.HttpModule
            ],
            providers: [shopping_list_service_1.ShoppingListService, recipe_service_1.RecipeService, auth_service_1.AuthService, auth_guard_service_1.AuthGuardService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map