import {Component, OnInit,Output,EventEmitter,Input} from 'angular2/core';
import {Player} from './player';
import {ObjectService} from './object.service';

@Component({
    selector: 'player-detail',
    templateUrl:'app/player-detail.component.html' ,
    inputs: ['player','players', 'selectedPlayer'],
    outputs:['toggle'];
    styleUrls:['app/player-detail.component.css'],
    providers:[ObjectService]
})
export class PlayerDetailComponent implements OnInit{
    public players: Player[];
    public player: Player;
    public selectedPlayer: Player;
    toggle = new EventEmitter();

    constructor( private _service: ObjectService){
    }


    ngOnInit(){
        //this.getObjects();
        //console.log('Initting Object:'+this.objects);
    }

    onSelect(player: Player) {
        console.log('toggle fired:', player);
        this.selectedPlayer = player;
        this.toggle.emit({value:player});

    }
    getObjects(){
        this._service.getObjects().then(objects => this.objects = objects);
    }



}


