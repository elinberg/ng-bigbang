var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var bootstrap_1 = require('angular2/bootstrap');
var router_1 = require('angular2/router');
var LogService = (function () {
    function LogService() {
        this.logs = [];
    }
    LogService.prototype.addLog = function (message) { this.logs.push(message); };
    LogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LogService);
    return LogService;
})();
// #docregion routerOnDeactivate
var MyCmp = (function () {
    function MyCmp(logService) {
        this.logService = logService;
    }
    MyCmp.prototype.routerOnDeactivate = function (next, prev) {
        this.logService.addLog("Navigating from \"" + (prev ? prev.urlPath : 'null') + "\" to \"" + next.urlPath + "\"");
    };
    MyCmp = __decorate([
        core_1.Component({ selector: 'my-cmp', template: "<div>hello</div>" }), 
        __metadata('design:paramtypes', [LogService])
    ], MyCmp);
    return MyCmp;
})();
// #enddocregion
var AppCmp = (function () {
    function AppCmp(logService) {
        this.logService = logService;
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'example-app',
            template: "\n    <h1>My App</h1>\n    <nav>\n      <a [routerLink]=\"['/HomeCmp']\" id=\"home-link\">Navigate Home</a> |\n      <a [routerLink]=\"['/ParamCmp', {param: 1}]\" id=\"param-link\">Navigate with a Param</a>\n    </nav>\n    <router-outlet></router-outlet>\n    <div id=\"log\">\n      <h2>Log:</h2>\n      <p *ngFor=\"#logItem of logService.logs\">{{ logItem }}</p>\n    </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', component: MyCmp, name: 'HomeCmp' },
            { path: '/:param', component: MyCmp, name: 'ParamCmp' }
        ]), 
        __metadata('design:paramtypes', [LogService])
    ], AppCmp);
    return AppCmp;
})();
function main() {
    return bootstrap_1.bootstrap(AppCmp, [
        core_1.provide(router_1.APP_BASE_HREF, { useValue: '/angular2/examples/router/ts/on_deactivate' }),
        LogService
    ]);
}
exports.main = main;
//# sourceMappingURL=on_deactivate_example.js.map