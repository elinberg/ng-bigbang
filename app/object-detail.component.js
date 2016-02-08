var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var object_service_1 = require('./object.service');
var ObjectDetailComponent = (function () {
    function ObjectDetailComponent(_objService) {
        this._objService = _objService;
    }
    ObjectDetailComponent.prototype.go = function (oid, pid) {
        console.log(oid);
        this.results = this.getResult(pid, oid);
    };
    ObjectDetailComponent.prototype.getResult = function (oid, pid) {
        var _this = this;
        this._objService.getResults(pid, oid).then(function (results) { return _this.results = results; });
    };
    ObjectDetailComponent = __decorate([
        core_1.Component({
            selector: 'object-detail',
            templateUrl: 'app/object-detail.component.html',
            styleUrls: ['app/object-detail.component.css'],
            inputs: ['object', 'player'],
            providers: [object_service_1.ObjectService]
        })
    ], ObjectDetailComponent);
    return ObjectDetailComponent;
})();
exports.ObjectDetailComponent = ObjectDetailComponent;
//# sourceMappingURL=object-detail.component.js.map