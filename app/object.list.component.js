var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var object_detail_component_1 = require('./object-detail.component');
var object_service_1 = require('./object.service');
var ObjectListComponent = (function () {
    function ObjectListComponent(_service) {
        this._service = _service;
    }
    ObjectListComponent.prototype.ngOnInit = function () {
        this.objects = this.getObjects();
    };
    ObjectListComponent.prototype.getObjects = function () {
        var _this = this;
        this._service.getObjects().then(function (objects) { return _this.objects = objects; });
    };
    ObjectListComponent.prototype.selectObject = function (object, player) {
        if (player === void 0) { player = Player; }
        this.selectedObject = object;
        this.selectedPlayer = player;
        console.log('SelectedObject:', object, player);
    };
    ObjectListComponent = __decorate([
        core_1.Component({
            selector: 'object-list',
            templateUrl: 'app/object-list.component.html',
            directives: [object_detail_component_1.ObjectDetailComponent],
            styleUrls: ['app/object-list.component.css'],
            providers: [object_service_1.ObjectService],
            inputs: ['player', 'object']
        })
    ], ObjectListComponent);
    return ObjectListComponent;
})();
exports.ObjectListComponent = ObjectListComponent;
//# sourceMappingURL=object.list.component.js.map