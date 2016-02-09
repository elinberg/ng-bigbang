var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var object_service_1 = require('./object.service');
var PlayerDetailComponent = (function () {
    function PlayerDetailComponent(_service) {
        this._service = _service;
        this.toggle = new core_1.EventEmitter();
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        //this.getObjects();
        //console.log('Initting Object:'+this.objects);
    };
    PlayerDetailComponent.prototype.onSelect = function (player) {
        console.log('toggle fired:', player);
        this.selectedPlayer = player;
        this.toggle.emit({ value: player });
    };
    PlayerDetailComponent.prototype.getObjects = function () {
        var _this = this;
        this._service.getObjects().then(function (objects) { return _this.objects = objects; });
    };
    PlayerDetailComponent = __decorate([
        core_1.Component({
            selector: 'player-detail',
            templateUrl: 'app/player-detail.component.html',
            inputs: ['player', 'players', 'selectedPlayer'],
            outputs: ['toggle'],
            styleUrls: ['app/player-detail.component.css'],
            providers: [object_service_1.ObjectService]
        })
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
})();
exports.PlayerDetailComponent = PlayerDetailComponent;
//# sourceMappingURL=player-detail.component.js.map