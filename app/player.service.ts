import {Player} from './player'
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http'
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class PlayerService {
    constructor(public http: Http) {
    }

    private _playersUrl = 'http://localhost:8000/app_dev.php/players';


    getPlayers() {
        return this.http.get(this._playersUrl)
            .toPromise()
            .then(res => <Player[]> res.json(), this.handleError)
            .then(data => { console.log('ERIC'+data); return data; });
    }

    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw( Response.json() || 'Server error');
    }
}
