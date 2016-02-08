var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var StatsComponent = (function () {
    function StatsComponent(objService) {
        this.objService = objService;
        this.columnDefs = [
            { headerName: "Player", field: "player" },
            { headerName: "Wins", field: "win" },
            { headerName: "Losses", field: "lose" },
            { headerName: "Draws", field: "draw" },
            { headerName: "Rocks", field: "rocks" },
            { headerName: "Papers", field: "papers" },
            { headerName: "Scissors", field: "scissors" },
            { headerName: "Lizards", field: "lizards" },
            { headerName: "Spocks", field: "spocks" },
        ];
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.getStats();
    };
    StatsComponent.prototype.getStats = function () {
        var _this = this;
        this.objService.getStats().then(function (stats) { return _this.stats = stats; });
    };
    StatsComponent = __decorate([
        core_1.Component({
            selector: 'stats-grid',
            templateUrl: './app/stats-component.html',
            directives: [],
            styleUrls: ['./app/stats-component.css']
        })
    ], StatsComponent);
    return StatsComponent;
})();
exports.StatsComponent = StatsComponent;
//# sourceMappingURL=stats.component.js.map