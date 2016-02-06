var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var PlayerDetailComponent = (function () {
    function PlayerDetailComponent() {
    }
    //constructor( private object: Object){ this.object = Object;}
    PlayerDetailComponent.prototype.ngOnInit = function () {
        console.log('Initting Object:' + this.selectedObject);
    };
    PlayerDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-player-detail',
            template: "\n    <div *ngIf=\"object\">\n      <h2>{{player.name}} details!</h2>\n      <div><label>id: </label>{{player.id}}</div>\n\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"player.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  ",
            inputs: ['player', 'object']
        })
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
})();
exports.PlayerDetailComponent = PlayerDetailComponent;
//# sourceMappingURL=player-detail.component.js.map