var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var object_service_1 = require('./object.service');
var ObjectDetailComponent = (function () {
    function ObjectDetailComponent() {
    }
    ObjectDetailComponent.prototype.go = function (objectId, playerId) {
        console.log(objectId);
        alert('Got here');
    };
    ObjectDetailComponent.prototype.getResult = function () {
        var _this = this;
        this._objService.getResult().then(function (players) { return _this.players = players; });
    };
    ObjectDetailComponent = __decorate([
        core_1.Component({
            selector: 'object-detail',
            templateUrl: 'app/object-detail.component.html',
            styleUrls: ['app/object-detail.component.css'],
            inputs: ['object', 'player', 'selectedObject', 'selectedPlayer'],
            providers: [object_service_1.ObjectService]
        })
    ], ObjectDetailComponent);
    return ObjectDetailComponent;
})();
exports.ObjectDetailComponent = ObjectDetailComponent;
//# sourceMappingURL=object-detail.component.js.map