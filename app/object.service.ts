import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http'
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Object} from "./object";


@Injectable()
export class ObjectService {
    constructor(public http: Http){
    }

    //private _objectsUrl = '/app/object.json';
    private _objectsUrl = 'http://localhost:8000/objects';

    getObjects() {
        return this.http.get(this._objectsUrl)
            .toPromise()
            .then(res => <Object[]> res.json(), this.handleError)
            .then(data => { console.log('Objects:'+data); return data; });
    }

    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw( Response.json() || 'Server error');
    }
}
