var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var firebase = require('firebase');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase.initializeApp({
            apiKey: "AIzaSyC0awTFZhoN9QSFRkaDa1ErA2rnL6QXXLc",
            authDomain: "recipe-book-f67d8.firebaseapp.com"
        });
        //axamit
        /*firebase.initializeApp({
          apiKey: "AIzaSyDz1YgT8_ueYd_qioOdM8Vmw6WzrYa-ayI",
          authDomain: "ng-recipe-book-5b039.firebaseapp.com",
        });*/
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map