var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var recipes_component_1 = require('./recipes/recipes.component');
var shopping_list_component_1 = require('./shopping-list/shopping-list.component');
var recipe_detail_component_1 = require('./recipes/recipe-detail/recipe-detail.component');
var recipe_edit_component_1 = require('./recipes/recipe-edit/recipe-edit.component');
var signup_component_1 = require('./auth/signup/signup.component');
var signin_component_1 = require('./auth/signin/signin.component');
var auth_guard_service_1 = require('./auth/auth-guard.service');
var recipe_resolver_service_1 = require('./recipes/recipe-resolver.service');
var routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: recipes_component_1.RecipesComponent, children: [
            { path: 'new', component: recipe_edit_component_1.RecipeEditComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
            { path: ':id', component: recipe_detail_component_1.RecipeDetailComponent, resolve: [recipe_resolver_service_1.RecipeResolverService] },
            { path: ':id/edit', component: recipe_edit_component_1.RecipeEditComponent, resolve: [recipe_resolver_service_1.RecipeResolverService], canActivate: [auth_guard_service_1.AuthGuardService] },
        ] },
    { path: 'shopping-list', component: shopping_list_component_1.ShoppingListComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'signin', component: signin_component_1.SigninComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
})();
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map