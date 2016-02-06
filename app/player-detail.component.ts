import {Component, OnInit} from 'angular2/core';
import {Player} from './player';
import {Object} from './object';

@Component({
    selector: 'my-player-detail',
    template: `
    <div *ngIf="object">
      <h2>{{player.name}} details!</h2>
      <div><label>id: </label>{{player.id}}</div>

      <div>
        <label>name: </label>
        <input [(ngModel)]="player.name" placeholder="name"/>
      </div>
    </div>
  `,
    inputs: ['player','object']

})
export class PlayerDetailComponent implements OnInit{
    public player: Player;
    public selectedObject: Object;

    //constructor( private object: Object){ this.object = Object;}

    ngOnInit(){
        console.log('Initting Object:'+this.selectedObject);
    }
}


