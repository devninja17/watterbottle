import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {
  user = { name: "" };

  new_poll = {
    name: "",
    question: "",
    option1: {text: "", votes: 0},
    option2: {text: "", votes: 0},
    option3: {text: "", votes: 0},
    option4: {text: "", votes: 0},
  };
    
  constructor(private _api: ApiService) { }
  
  ngOnInit() {
    this.user = this._api.getUser();
    this.new_poll.name = this.user.name;
  }

  onSubmit(){
    // console.log(this.user)
    console.log(this.new_poll)
    this._api.createQuestion(this.new_poll)
  }


}
