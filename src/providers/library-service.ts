import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { Library } from '../schema/library';


@Injectable()
export class LibraryService {
  libsUrl = "/api/libraries"

  constructor(public http: Http) {
  }

  // Get all libraries from the database.
  loadLibraries(): Observable<Library[]> {
    return this.http.get(this.libsUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
