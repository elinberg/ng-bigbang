import {Component, OnInit,EventEmitter,Output}   from 'angular2/core';
import {provide}           from 'angular2/core';
import {Object}                from './object';
import {ObjectDetailComponent} from './object-detail.component';
import {ObjectService}         from './object.service';
import {Player}                 from './player'

@Component({
    selector:    'object-list',
    templateUrl: 'app/object-list.component.html',
    directives:  [ObjectDetailComponent],
    styleUrls: ['app/object-list.component.css'],
    providers:   [ObjectService],
    inputs: ['player','object','selectedPlayer','selectedObject']
})
/*
 export class ObjectListComponent { ... }
 */



export class ObjectListComponent implements OnInit {
    constructor(private _service: ObjectService){ }

    public objects:Object[];
    public selectedObject: Object;
    public players: Player[];
    public selectedPlayer: Player;
    @Output() upDateDetail:EventEmitter<boolean> = new EventEmitter();

    ngOnInit(){


        this.objects = this.getObjects();
    }

    getObjects(){
        this._service.getObjects().then(objects => this.objects = objects);
    }

    selectObject(object: Object, player: Player) {
        this.selectedObject = object;
        this.selectedPlayer = player;
        console.log('SelectedObject:',object, player);
    }

    updateDetail(obj){

    }
}