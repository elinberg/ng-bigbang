import {Component, Input} from 'angular2/core';
import {Object} from './object';
import {ObjectService} from './object.service';


@Component({
    selector: 'object-detail',
    templateUrl:'app/object-detail.component.html',
    styleUrls:['app/object-detail.component.css'],
    inputs: ['object','player','selectedObject','selectedPlayer'],
    providers:   [ObjectService],
})

export class ObjectDetailComponent {

    private _objService:ObjectService;

go(objectId, playerId){

    console.log(objectId);
    alert('Got here');



}

    getResult(){
        this._objService.getResult().then(players => this.players = players);
    }

}

