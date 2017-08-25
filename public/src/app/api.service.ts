import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {
  user = { name: "" }

  constructor(private _http: Http) { }

  login(user){
    this.user = user
  }

  getUser() {
    return this.user;
  }

  createQuestion(new_poll){
    this._http.post('/surveys', new_poll)
    .map(data => data.json())
    .toPromise();
  }

  getAllQuestions(){
    return this._http.get('/surveys')
    .map(data => data.json())
    .toPromise();
  }

  getPoll(id){
    return this._http.get('/surveys/' + id)
    .map(data => data.json())
    .toPromise();
  }

  deleteQuestion(id){
    this._http.delete('/surveys/' + id)
    .map(data => data.json())
    .toPromise();
  }

  voteUp(id, optionNum){
    this._http.get('/surveys/' + id + '/' + optionNum)
    .map(data => data.json())
	  .toPromise();
  }

}
