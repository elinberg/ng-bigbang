import {Component,Input,OnInit} from 'angular2/core';
import {ObjectService} from './object.service';
import {Stats} from 'stats';


@Component({
    selector: 'stats-grid',
    templateUrl:'./app/stats-component.html',
    directives: [],
    styleUrls:['./app/stats-component.css'],
    inputs:['dataSource','stats']

})
export class StatsComponent {

    public stats:Stats[];
    public dataSource:Stats[];
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

        this.stats = this.dataSource;
    }

}