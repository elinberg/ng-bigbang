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
var object_detail_component_1 = require("./object-detail.component");
var stats_component_1 = require('./stats.component');
var AppComponent = (function () {
    function AppComponent(_playerService, http, _objectService) {
        this._playerService = _playerService;
        this.http = http;
        this._objectService = _objectService;
        this.title = 'Big Bang';
        this.toggleIt = false;
        this.toggleDetail = false;
    }
    AppComponent.prototype.onToggle = function (evt) {
        console.log('OnToggle fired:', evt.value);
        if (evt.value) {
            this.toggleIt = true;
            this.selectedPlayer = evt.value;
        }
    };
    AppComponent.prototype.toggleFlip = function () {
        this.toggleIt = !this.toggleIt;
    };
    AppComponent.prototype.onUpdateParent = function (evt) {
        if (evt.value) {
            this.toggleDetail = true;
            this.selectedObject = evt.value;
        }
        console.log('onUpdateParent fired:', evt.value);
    };
    AppComponent.prototype.getPlayers = function () {
        var _this = this;
        this._playerService.getPlayers().then(function (players) { return _this.players = players; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getPlayers();
        this.getStats();
    };
    AppComponent.prototype.onUpdateStats = function (event) {
        this.getStats();
        console.log('onUpdateStats fired:');
    };
    AppComponent.prototype.getStats = function () {
        var _this = this;
        this._objectService.getStats().then(function (stats) { return _this.stats = stats; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1 (click)=\"toggleFlip()\">{{title}}</h1>\n    <div class=\"lefty\">\n        <player-detail (toggle)=\"onToggle($event)\" [(players)]=\"players\"></player-detail>\n    </div>\n\n    <div class=\"lefty\">\n    <object-list [(toggleIt)]=\"toggleIt\" (updateParent)=\"onUpdateParent($event)\"></object-list>\n    </div>\n\n    <div class=\"lefty\">\n        <object-detail (updateStats)=\"onUpdateStats($event)\" [(toggleDetail)]=\"toggleDetail\" [(player)]=\"selectedPlayer\"  [(object)]=\"selectedObject\"></object-detail>\n    </div>\n    <div class=\"lefty\">\n        <stats-grid  [(stats)]=\"stats\"></stats-grid>\n    </div>\n\n    <p>Follow me on Github or Share this application on Linkin or Facebook.\n    </p>\n\n    <ul class=\"share-buttons\">\n    <li><a href=\"http://github.com/elinberg\" title=\"Follow me on Github\"><img width=\"32px\" src=\"images/flat_web_icon_set/color/github_icon.png\"></a></li>\n  <li><a href=\"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fericlinberg.com&t=\" title=\"Share on Facebook\" target=\"_blank\" onclick=\"window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL)); return false;\"><img src=\"images/flat_web_icon_set/color/Facebook.png\"></a></li>\n  <li><a href=\"http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fericlinberg.com&title=&summary=&source=http%3A%2F%2Fericlinberg.com\" target=\"_blank\" title=\"Share on LinkedIn\" onclick=\"window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;\"><img src=\"images/flat_web_icon_set/color/LinkedIn.png\"></a></li>\n  </ul>\n\n    <p>Single Page App front end built with Angular2\n\n    <p>RESTful API built with Symfony and PHP</p>\n\n  ",
            styleUrls: ['app/app.component.css', 'node_modules/font-awesome/css/font-awesome.min.css'],
            directives: [player_detail_component_1.PlayerDetailComponent, stats_component_1.StatsComponent, object_list_component_1.ObjectListComponent, object_detail_component_1.ObjectDetailComponent],
            inputs: ['stats', 'toggleIt', 'selectedPlayer'],
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