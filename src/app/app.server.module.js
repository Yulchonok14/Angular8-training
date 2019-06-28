var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var platform_server_1 = require('@angular/platform-server');
var module_map_ngfactory_loader_1 = require('@nguniversal/module-map-ngfactory-loader');
var app_module_1 = require('./app.module');
var app_component_1 = require('./app.component');
var AppServerModule = (function () {
    function AppServerModule() {
    }
    AppServerModule = __decorate([
        core_1.NgModule({
            imports: [
                // The AppServerModule should import your AppModule followed
                // by the ServerModule from @angular/platform-server.
                app_module_1.AppModule,
                platform_server_1.ServerModule,
                module_map_ngfactory_loader_1.ModuleMapLoaderModule // <-- *Important* to have lazy-loaded routes work
            ],
            // Since the bootstrapped component is not inherited from your
            // imported AppModule, it needs to be repeated here.
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppServerModule);
    return AppServerModule;
})();
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=app.server.module.js.map