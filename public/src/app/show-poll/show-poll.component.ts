import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-show-poll',
  templateUrl: './show-poll.component.html',
  styleUrls: ['./show-poll.component.css']
})
export class ShowPollComponent implements OnInit {
  poll = {}

  constructor(private _api: ApiService, private _route: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.getPoll()
  }

  getPoll(){
    this._route.paramMap
      .switchMap(params => {
        return this._api.getPoll(params.get('id'));
      })
      .subscribe(data => this.poll = data);
  }

  voteUp(id, optionNum){
    this._api.voteUp(id, optionNum);
    this._api.getPoll(id)
    .then(data => this.poll = data)
    .catch(errors => console.log(errors))
    this.getPoll();
  }

}