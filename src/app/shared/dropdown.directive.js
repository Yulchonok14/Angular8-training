var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require("@angular/core");
var DropdownDirective = (function () {
    function DropdownDirective() {
        this.open = false;
    }
    DropdownDirective.prototype.toggleDropdown = function () {
        this.open = !this.open;
    };
    __decorate([
        core_1.HostBinding('class.open')
    ], DropdownDirective.prototype, "open");
    Object.defineProperty(DropdownDirective.prototype, "toggleDropdown",
        __decorate([
            core_1.HostListener('click')
        ], DropdownDirective.prototype, "toggleDropdown", Object.getOwnPropertyDescriptor(DropdownDirective.prototype, "toggleDropdown")));
    DropdownDirective = __decorate([
        core_1.Directive({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
})();
exports.DropdownDirective = DropdownDirective;
//# sourceMappingURL=dropdown.directive.js.map