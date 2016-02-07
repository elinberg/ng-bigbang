import {Component, OnInit} from 'angular2/core';
import {HTTP_BINDINGS}  from 'angular2/http';
import {Observable}       from 'rxjs/Observable';
import {Object} from './object';
import {Player} from './player';
import {PlayerDetailComponent} from './player-detail.component';
import {PlayerService} from './player.service';
import {provide}           from 'angular2/core';
import {Http} from "angular2/http";
import {HTTP_PROVIDERS} from "angular2/http";
//import {ObjectService} from "./object.service";
import {ObjectListComponent} from "./object.list.component";
import {ObjectDetailComponent} from "./object-detail.component";


@Component({
    selector: 'my-app',
    template:`
    <h1>{{title}}</h1>
    <div style="display: inline-block; width: 20%; vertical-align: top;">

    <div>Choose a Player</div>
    <ul class="players">
      <li *ngFor="#player of players"
        [class.selected]="player === selectedPlayer"
        (click)="onSelect(player)">
        <span class="badge">{{player.id}}</span> {{player.name}}
      </li>
    </ul>
    </div>
    <object-list [(object)]="selectedObject" [(player)]="selectedPlayer"></object-list>



  `,
    styles:[`
    .leftAlign {
        display:inline-block;
        vertical-align: top;
        width: 50%;
    }
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .players {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .players li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .players li.selected:hover {
      color: white;
    }
    .players li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .players .text {
      position: relative;
      top: -3px;
    }
    .players .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `],
    directives: [ObjectListComponent,ObjectDetailComponent],

    providers: [
        HTTP_PROVIDERS,
        PlayerService,
    ]

})

export class AppComponent implements OnInit {
    public title = 'Big Bang';
    public players: Player[];

    public selectedPlayer: Player;


    constructor( private _playerService: PlayerService, public http: Http) { }



    getPlayers(){

        this._playerService.getPlayers().then(players => this.players = players);

    }

    ngOnInit() {
        this.getPlayers();
        //this.getObjects();

    }

    onSelect(player: Player) {

        this.selectedPlayer = player;


    }

}





