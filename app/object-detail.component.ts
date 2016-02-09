import {Component, Input, OnInit,EventEmitter} from 'angular2/core';
import {Object} from './object';
import {ObjectService} from './object.service';
import {Results} from './results';
import {Stats} from './stats';
import {StatsComponent} from "./stats.component";

@Component({
    selector: 'object-detail',
    templateUrl:'app/object-detail.component.html',
    styleUrls:['app/object-detail.component.css','node_modules/font-awesome/css/font-awesome.css'],
    inputs: ['object','player','toggleDetail'],
    providers:   [ObjectService],
    outputs:['updateStats'],
    directives:[StatsComponent]
})

export class ObjectDetailComponent implements OnInit{
    constructor( private _objService: ObjectService){

    }

    public results:Results[];
    public stats:Stats[];
    updateStats = new EventEmitter();
    public awesome = ['fa-hand-rock-o','fa-hand-paper-o','fa-hand-scissors-o','fa-hand-lizard-o','fa-hand-spock-o'];

    go(oid, pid){

        console.log('oid',oid);
        this.results = this.getResult(pid,oid);

        this.updateStats.emit();
        console.log('updateStats fired');

    }


    getResult(oid,pid){
        this._objService.getResults(pid,oid).then(results => this.results = results);
    }

}

