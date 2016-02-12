import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http'
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Object} from "./object";
import {Results} from './results'
import {Stats} from "./stats";


@Injectable()
export class ObjectService {
    constructor(public http: Http){
    }

    //private _objectsUrl = '/app/object.json';
    //private _objectsUrl = 'http://api.bigbang.ericlinberg.com:8000/';
    private _objectsUrl = 'http://localhost:8000/';

    getObjects() {
        return this.http.get(this._objectsUrl+'objects')
            .toPromise()
            .then(res => <Object[]> res.json(), this.handleError)
            .then(data => { console.log('Objects:'+data); return data; });
    }

    getResults(playerId,objId){
        return this.http.get(this._objectsUrl+'play/'+playerId+'/'+objId)
            .toPromise()
            .then(res => <Results[]> res.json(), this.handleError)
            .then(data => { console.log('Results:',data); return data; });

    }

    getStats(){
        return this.http.get(this._objectsUrl+'stats')
            .toPromise()
            .then(res => <Stats[]> res.json(), this.handleError)
            .then(data => { console.log('Stats Results:',data); return data; });

    }

    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw( Response.json() || 'Server error');
    }
}
