var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var player_service_1 = require('./player.service');
var http_1 = require("angular2/http");
var object_service_1 = require("./object.service");
var object_list_component_1 = require("./object.list.component");
var object_detail_component_1 = require("./object-detail.component");
var stats_component_1 = require('./stats.component');
var AppComponent = (function () {
    function AppComponent(_playerService, http, _objectService) {
        this._playerService = _playerService;
        this.http = http;
        this._objectService = _objectService;
        this.title = 'Big Bang';
    }
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
    AppComponent.prototype.onSelect = function (player) {
        this.selectedPlayer = player;
        this.getStats();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <div style=\"display: inline-block; width: 20%; vertical-align: top;\">\n\n    <div>Choose a Player</div>\n    <ul class=\"players\">\n      <li *ngFor=\"#player of players\"\n        [class.selected]=\"player === selectedPlayer\"\n        (click)=\"onSelect(player)\">\n        <span class=\"badge\">{{player.id}}</span> {{player.name}}\n      </li>\n    </ul>\n    </div>\n    <object-list [(object)]=\"selectedObject\" [(player)]=\"selectedPlayer\"></object-list>\n    <div *ngIf=\"true\" style=\"border: dashed 1px black; height:30em\" class=\"left\">\n        <stats-grid [(stats)]=\"stats\"></stats-grid>\n    </div>\n    {{stats}}\n\n  ",
            styles: ["\n    .leftAlign {\n        display:inline-block;\n        vertical-align: top;\n        width: 50%;\n    }\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .players {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 10em;\n    }\n    .players li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0em;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .players li.selected:hover {\n      color: white;\n    }\n    .players li:hover {\n      color: #607D8B;\n      background-color: #EEE;\n      left: .1em;\n    }\n    .players .text {\n      position: relative;\n      top: -3px;\n    }\n    .players .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0em 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0px 0px 4px;\n    }\n    .lefty{\n    display: inline-block; width: 100%; vertical-align: top;\n}\n\n  "],
            directives: [object_list_component_1.ObjectListComponent, object_detail_component_1.ObjectDetailComponent, stats_component_1.StatsComponent],
            inputs: ['stats'],
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