import {Component, OnInit,Output,EventEmitter,Input} from 'angular2/core';
import {Player} from './player';
import {Object} from './object';
import {ObjectService} from './object.service';
import {ObjectListComponent} from "./object.list.component";


@Component({
    selector: 'player-detail',
    templateUrl:'app/player-detail.component.html' ,
    inputs: ['player','players', 'selectedPlayer','toggleIt'],
    outputs:['toggle'];
    styleUrls:['app/player-detail.component.css'],
    providers:[ObjectService],
    directives:[ObjectListComponent]
})
export class PlayerDetailComponent implements OnInit{
    public players: Player[];
    public player: Player;
    public selectedPlayer: Player;
    public objects:Object[];
    toggle = new EventEmitter<Boolean>();
    //public toggleIt;

    constructor( private _service: ObjectService){
    }


    ngOnInit(){
        this.getObjects();
        console.log('Initting Object:'+this.objects);
    }

    onSelect(player: Player) {
        console.log('Fired PlayerDetail', this.toggleIt);

        this.toggleIt=true;
        this.selectedPlayer = player;
        this.toggle.emit({value:this.toggleIt});

    }
    getObjects(){
        this._service.getObjects().then(objects => this.objects = objects);
    }



}


