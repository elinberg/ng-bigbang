var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
var PlayerService = (function () {
    function PlayerService(http) {
        this.http = http;
        this._playersUrl = 'http://api.bigbang.ericlinberg.com:8000/players';
    }
    //private _playersUrl = 'http://localhost:8000/players';
    PlayerService.prototype.getPlayers = function () {
        return this.http.get(this._playersUrl)
            .toPromise()
            .then(function (res) { return res.json(); }, this.handleError)
            .then(function (data) { console.log('ERIC' + data); return data; });
    };
    PlayerService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(http_1.Response.json() || 'Server error');
    };
    PlayerService = __decorate([
        core_1.Injectable()
    ], PlayerService);
    return PlayerService;
})();
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map