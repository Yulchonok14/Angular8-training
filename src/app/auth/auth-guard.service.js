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
var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (activatedRouteSnapshot, routeStateSnapshot) {
        /*if(!this.authService.isAuthenticated()) {
          this.router.navigate(['./']);
        }*/
        //return this.authService.isAuthenticated();
        return rxjs_1.of(true);
    };
    AuthGuardService = __decorate([
        core_1.Injectable()
    ], AuthGuardService);
    return AuthGuardService;
})();
exports.AuthGuardService = AuthGuardService;
//# sourceMappingURL=auth-guard.service.js.map