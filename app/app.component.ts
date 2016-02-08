import {Component, OnInit, Input, Output,EventEmitter} from 'angular2/core';
import {HTTP_BINDINGS}  from 'angular2/http';
import {Observable}       from 'rxjs/Observable';
import {Object} from './object';
import {Player} from './player';
import {PlayerDetailComponent} from './player-detail.component';
import {PlayerService} from './player.service';
import {provide}           from 'angular2/core';
import {Http} from "angular2/http";
import {HTTP_PROVIDERS} from "angular2/http";
import {ObjectService} from "./object.service";
import {ObjectListComponent} from "./object.list.component";
import {ObjectDetailComponent} from "./object-detail.component";
import {StatsComponent} from './stats.component';
import {Stats} from './stats';



@Component({
    selector: 'my-app',
    template:`
    <h1 (click)="toggleFlip()">{{title}} {{selectedObject}} {{toggleIt}} {{player}}</h1>
    <div class="lefty">
        <player-detail [(toggleIt)]="toggleIt" (toggle)="onToggle($event)" [(players)]="players"></player-detail>
    </div>

    <div *ngIf="toggleIt" class="lefty">
    <object-list [(selectedObject)]="selectedObject" [(object)]="object" [(player)]="player" [(objects)]="objects" ></object-list>
    </div>

    <div *ngIf="true" class="lefty">
        <object-detail  [(player)]="player" [(object)]="object"></object-detail>
    </div>
    <div *ngIf="false" style="border: solid 1px black;max-width: 400px" class="left">
        <stats-grid [(stats)]="stats"></stats-grid>
    </div>

  `,
    styles:[`
    .lefty {
        display:inline-block;
        vertical-align: top;
        width: 20%;
    }


    @media (max-width: 700px) {
    .lefty {
        min-width: 175px !important;
        height: auto !important;
        padding: 10px;
        display: inline-block;
    }

}


  `],
    directives: [PlayerDetailComponent,StatsComponent,ObjectListComponent],
    inputs:['stats','toggleIt'],
    //outputs:['toggleOutput'],

    providers: [
        HTTP_PROVIDERS,
        PlayerService,
        ObjectService,
        StatsComponent
    ]

})

export class AppComponent implements OnInit {
    public title = 'Big Bang';
    public players: Player[];
    public objects: Object[];
    public stats: Stats[];
    public selectedPlayer: Player;
    public selectedObject: Object;
    public toggleIt = false;


    constructor( private _playerService: PlayerService, public http: Http, private _objectService: ObjectService) {

    }

    onToggle(evt){
        console.log('OnToggle');
        console.log(evt);
        this.toggleIt=evt.value;

    }

    toggleFlip(){

        this.toggleIt=!this.toggleIt;
    }

    onDetail(evt){
        this.selectedObject = evt.value;

    }

    getPlayers(){

        this._playerService.getPlayers().then(players => this.players = players);

    }

    ngOnInit() {
        this.getPlayers();
        this.getStats();


    }

    getStats(){

        this._objectService.getStats().then(stats => this.stats = stats);
    }



}





