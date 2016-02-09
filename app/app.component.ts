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
    <h1 (click)="toggleFlip()">{{title}}</h1>
    <div class="lefty">
        <player-detail (toggle)="onToggle($event)" [(players)]="players"></player-detail>
    </div>

    <div class="lefty">
    <object-list [(toggleIt)]="toggleIt" (updateParent)="onUpdateParent($event)"></object-list>
    </div>

    <div class="lefty">
        <object-detail (updateStats)="onUpdateStats($event)" [(toggleDetail)]="toggleDetail" [(player)]="selectedPlayer"  [(object)]="selectedObject"></object-detail>
    </div>
    <div class="lefty">
        <stats-grid  [(stats)]="stats"></stats-grid>
    </div>

  `,
    styles:[`
    .lefty {
        display:inline-block;
        vertical-align: top;
        width: 20%;
    }


    @media (max-width: 810px) {
    .lefty {
        min-width: 170px !important;
        height: auto !important;
        padding: 10px;
        display: inline-block;
        width:400px;
    }

}


  `],
    directives: [PlayerDetailComponent,StatsComponent,ObjectListComponent,ObjectDetailComponent],
    inputs:['stats','toggleIt','selectedPlayer'],
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
    public toggleDetail = false;


    constructor( private _playerService: PlayerService, public http: Http, private _objectService: ObjectService) {

    }

    onToggle(evt){
        console.log('OnToggle fired:',evt.value);
        if(evt.value){
            this.toggleIt=true;
            this.selectedPlayer=evt.value;
        }


    }

    toggleFlip(){

        this.toggleIt=!this.toggleIt;
    }

    onUpdateParent(evt){

        if(evt.value){
            this.toggleDetail=true;
            this.selectedObject = evt.value;
        }

        console.log('onUpdateParent fired:',evt.value);

    }

    getPlayers(){

        this._playerService.getPlayers().then(players => this.players = players);

    }

    ngOnInit() {
        this.getPlayers();
        this.getStats();


    }

    onUpdateStats(event){

        this.getStats();

        console.log('onUpdateStats fired:');
    }

    getStats(){

        this._objectService.getStats().then(stats => this.stats = stats);
    }



}





