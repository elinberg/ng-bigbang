var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
var ObjectService = (function () {
    function ObjectService(http) {
        this.http = http;
        //private _objectsUrl = '/app/object.json';
        //private _objectsUrl = 'http://api.bigbang.ericlinberg.com:8000/';
        this._objectsUrl = 'http://localhost:8000/';
    }
    ObjectService.prototype.getObjects = function () {
        return this.http.get(this._objectsUrl + 'objects')
            .toPromise()
            .then(function (res) { return res.json(); }, this.handleError)
            .then(function (data) { console.log('Objects:' + data); return data; });
    };
    ObjectService.prototype.getResults = function (playerId, objId) {
        return this.http.get(this._objectsUrl + 'play/' + playerId + '/' + objId)
            .toPromise()
            .then(function (res) { return res.json(); }, this.handleError)
            .then(function (data) { console.log('Results:', data); return data; });
    };
    ObjectService.prototype.getStats = function () {
        return this.http.get(this._objectsUrl + 'stats')
            .toPromise()
            .then(function (res) { return res.json(); }, this.handleError)
            .then(function (data) { console.log('Stats Results:', data); return data; });
    };
    ObjectService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(http_1.Response.json() || 'Server error');
    };
    ObjectService = __decorate([
        core_1.Injectable()
    ], ObjectService);
    return ObjectService;
})();
exports.ObjectService = ObjectService;
//# sourceMappingURL=object.service.js.map