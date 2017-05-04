import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { Meal } from '../schema/meal';
import { Report } from '../schema/report';


@Injectable()
export class MealService {
  mealsUrl = "/api/meals"

  constructor(public http: Http) {
  }

  // Add a meal to the database.
  add(meal: Meal): Observable<Meal> {
    let body = JSON.stringify(meal);
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.mealsUrl, body, {headers: headers})
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  // Get meals in start-end date range.
  get(start: string, end: string): Observable<Report> {
    return this.http.get(`${this.mealsUrl}/${start}/${end}`)
      .map(r => r.json() as Report)
      .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
