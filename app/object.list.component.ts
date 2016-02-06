import {Component, OnInit}   from 'angular2/core';
import {provide}           from 'angular2/core';
import {Object}                from './object';
//import {ObjectDetailComponent} from './object-detail.component';
import {ObjectService}         from './object.service';

@Component({
    selector:    'object-list',
    templateUrl: 'app/object-list.component.html',
    //directives:  [ObjectDetailComponent],
    styleUrls: ['app/object-list.component.css'],
    providers:   [ObjectService],
    inputs: ['player','object']
})
/*
 export class ObjectListComponent { ... }
 */



export class ObjectListComponent implements OnInit {
    constructor(private _service: ObjectService){ }

    public objects:Object[];
    public selectedObject: Object;

    ngOnInit(){

        console.log(this._service.getObjects());
        this.objects = this.getObjects();
    }

    getObjects(){
        this._service.getObjects().then(objects => this.objects = objects);
    }

    selectObject(object: Object) {
        this.selectedObject = object;
        console.log('SelectedObject:'+object);
    }
}