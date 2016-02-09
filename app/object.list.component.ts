import {Component, OnInit,Output,Input,EventEmitter}   from 'angular2/core';
import {Object}                from './object';
import {ObjectService}         from './object.service';

@Component({
    selector:    'object-list',
    templateUrl: 'app/object-list.component.html',
    styleUrls: ['app/object-list.component.css'],
    providers:   [ObjectService],
    inputs: ['object','selectedObject','toggleIt'],
    outputs:['updateParent']
})
export class ObjectListComponent implements OnInit {
    constructor(private _service: ObjectService){ }

    public objects:Object[];
    public selectedObject: Object;
    updateParent = new EventEmitter();

    ngOnInit(){

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