import {Component, Input} from 'angular2/core';
import {Object} from './object';


@Component({
    selector: 'object-detail',
    templateUrl:'app/object-detail.component.html',
    styleUrls:['app/object-detail.component.css'],
    inputs: ['object','player','selectedObject','selectedPlayer']
})

export class ObjectDetailComponent {



}

