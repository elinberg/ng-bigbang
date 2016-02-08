import {Component, Input, OnInit} from 'angular2/core';
import {Object} from './object';
import {ObjectService} from './object.service';
import {Results} from './results'

@Component({
    selector: 'object-detail',
    templateUrl:'app/object-detail.component.html',
    styleUrls:['app/object-detail.component.css'],
    inputs: ['object','player'],
    providers:   [ObjectService],
})

export class ObjectDetailComponent implements OnInit{
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

