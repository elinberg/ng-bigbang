import {Component, Input} from 'angular2/core';
import {Object} from './object';


@Component({
    selector: 'object-detail',
    templateUrl:'app/object-detail.component.html',
    directives: [ObjectDetailComponent]
})

export class ObjectDetailComponent {

    @Input() object:Object;

}

