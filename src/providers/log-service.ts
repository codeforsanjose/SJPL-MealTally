import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { Log } from '../schema/log';


@Injectable()
export class LogService {
  logsUrl = "/api/logs"
  logTypes = ['Food', 'Refrigerator'];

  constructor(public http: Http) {
  }

  // Add a log to the database.
  add(log: Log): Observable<Log> {
    let body = JSON.stringify(log);
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.logsUrl, body, {headers: headers})
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
