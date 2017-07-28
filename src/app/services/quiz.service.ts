import { Injectable } from '@angular/core';
// added
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
// added


@Injectable()
export class QuizService {

  constructor(private http: Http) { }

  get(url: string) {
    return this.http.get(url).map(res => res.text().length > 0 ? res.json() : null);
  }

  getAll() {
    return [
      { id: 'data/myquestions.json', name: 'Test 1' },
      // { id: 'data/myquestions.json', name: 'Test 2' },
      // { id: 'data/myquestions.json', name: 'Test 3' }
    ];
  }


}
