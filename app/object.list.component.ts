import {Component, OnInit,Output,Input,EventEmitter}   from 'angular2/core';
import {Object}                from './object';
import {ObjectService}         from './object.service';

@Component({
    selector:    'object-list',
    templateUrl: 'app/object-list.component.html',
    styleUrls: ['app/object-list.component.css','node_modules/font-awesome/css/font-awesome.css'],
    providers:   [ObjectService],
    inputs: ['object','selectedObject','toggleIt'],
    outputs:['updateParent']
})
export class ObjectListComponent implements OnInit {
    constructor(private _service: ObjectService){ }

    public objects:Object[];
    public selectedObject: Object;
    updateParent = new EventEmitter();
    public awesome: any;

    ngOnInit(){
        this.awesome = ['fa-hand-rock-o','fa-hand-paper-o','fa-hand-scissors-o','fa-hand-lizard-o','fa-hand-spock-o'];
        this.objects = this.getObjects();
    }

    getObjects(){
        this._service.getObjects().then(objects => this.objects = objects);
    }

    selectObject(object: Object) {
        this.selectedObject = object;
        console.log('updateParent fired:',object);
        this.updateParent.emit({value:this.selectedObject});

    }


}