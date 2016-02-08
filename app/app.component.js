var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var player_detail_component_1 = require('./player-detail.component');
var player_service_1 = require('./player.service');
var http_1 = require("angular2/http");
var object_service_1 = require("./object.service");
var object_list_component_1 = require("./object.list.component");
var stats_component_1 = require('./stats.component');
var AppComponent = (function () {
    function AppComponent(_playerService, http, _objectService) {
        this._playerService = _playerService;
        this.http = http;
        this._objectService = _objectService;
        this.title = 'Big Bang';
        this.toggleIt = false;
    }
    AppComponent.prototype.onToggle = function (evt) {
        console.log('OnToggle');
        console.log(evt);
        this.toggleIt = evt.value;
    };
    AppComponent.prototype.toggleFlip = function () {
        this.toggleIt = !this.toggleIt;
    };
    AppComponent.prototype.onDetail = function (evt) {
        this.selectedObject = evt.value;
    };
    AppComponent.prototype.getPlayers = function () {
        var _this = this;
        this._playerService.getPlayers().then(function (players) { return _this.players = players; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getPlayers();
        this.getStats();
    };
    AppComponent.prototype.getStats = function () {
        var _this = this;
        this._objectService.getStats().then(function (stats) { return _this.stats = stats; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1 (click)=\"toggleFlip()\">{{title}} {{selectedObject}} {{toggleIt}} {{player}}</h1>\n    <div class=\"lefty\">\n        <player-detail [(toggleIt)]=\"toggleIt\" (toggle)=\"onToggle($event)\" [(players)]=\"players\"></player-detail>\n    </div>\n\n    <div *ngIf=\"toggleIt\" class=\"lefty\">\n    <object-list [(selectedObject)]=\"selectedObject\" [(object)]=\"object\" [(player)]=\"player\" [(objects)]=\"objects\" ></object-list>\n    </div>\n\n    <div *ngIf=\"true\" class=\"lefty\">\n        <object-detail  [(player)]=\"player\" [(object)]=\"object\"></object-detail>\n    </div>\n    <div *ngIf=\"false\" style=\"border: solid 1px black;max-width: 400px\" class=\"left\">\n        <stats-grid [(stats)]=\"stats\"></stats-grid>\n    </div>\n\n  ",
            styles: ["\n    .lefty {\n        display:inline-block;\n        vertical-align: top;\n        width: 20%;\n    }\n\n\n    @media (max-width: 700px) {\n    .lefty {\n        min-width: 175px !important;\n        height: auto !important;\n        padding: 10px;\n        display: inline-block;\n    }\n\n}\n\n\n  "],
            directives: [player_detail_component_1.PlayerDetailComponent, stats_component_1.StatsComponent, object_list_component_1.ObjectListComponent],
            inputs: ['stats', 'toggleIt'],
            //outputs:['toggleOutput'],
            providers: [
                http_1.HTTP_PROVIDERS,
                player_service_1.PlayerService,
                object_service_1.ObjectService,
                stats_component_1.StatsComponent
            ]
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map