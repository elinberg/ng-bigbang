import {Component, Input} from 'angular2/core';
import {Object} from './object';
import {ObjectService} from './object.service';
import {Results} from './results'

@Component({
    selector: 'object-detail',
    templateUrl:'app/object-detail.component.html',
    styleUrls:['app/object-detail.component.css'],
    inputs: ['object','player','selectedObject','selectedPlayer'],
    providers:   [ObjectService],
})

export class ObjectDetailComponent {
    constructor( private _objService: ObjectService){

    }

    public results:Results[];

    go(oid, pid){

        console.log(oid);
        this.results = this.getResult(pid,oid);

    }

    getResult(oid,pid){
        this._objService.getResults(pid,oid).then(results => this.results = results);
    }

}

