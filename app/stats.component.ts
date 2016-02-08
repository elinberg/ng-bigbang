import {Component,Input,OnInit} from 'angular2/core';
import {ObjectService} from './object.service';
import {Stats} from 'stats';


@Component({
    selector: 'stats-grid',
    templateUrl:'./app/stats-component.html',
    directives: [],
    styleUrls:['./app/stats-component.css']

})
export class StatsComponent {

    public stats:Stats[];

    constructor( private objService: ObjectService){}

    columnDefs = [
        { headerName: "Player", field: "player" },
        { headerName: "Wins", field: "win" },
        { headerName: "Losses", field: "lose" },
        { headerName: "Draws", field: "draw" },
        { headerName: "Rocks", field: "rocks" },
        { headerName: "Papers", field: "papers" },
        { headerName: "Scissors", field: "scissors" },
        { headerName: "Lizards", field: "lizards" },
        { headerName: "Spocks", field: "spocks" },

    ];

    ngOnInit(){
        this.getStats();
    }

    getStats(){

        this.objService.getStats().then(stats => this.stats = stats);
    }
    // put data directly onto the controller
 /*   rowData = [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ];*/
}