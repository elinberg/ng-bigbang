// #docregion Observable
var Observable_1 = require('../../../../../../rxjs/Observable');
require('../../../../../../rxjs/add/operator/map');
var obs = new Observable_1.Observable(function (obs) {
    var i = 0;
    setInterval(function (_) { return obs.next(++i); }, 1000);
});
obs.map(function (i) { return (i + " seconds elapsed"); }).subscribe(function (msg) { return console.log(msg); });
// #enddocregion
//# sourceMappingURL=observable_patched.js.map