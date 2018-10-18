import { Component, OnInit } from '@angular/core';
import { learnerSignIn, learnerSignUp } from './learner-model';


@Component({
  selector: 'app-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.css']
})
export class LearnerComponent implements OnInit {

  userSignUp: any = {
    fullName: "",
    email: "",
    password: "",
  };

  userSignIn: any = {

    email: "",
    password: ""
  }

  myname: string = "";

  signIn = new learnerSignIn();
  signUp = new learnerSignUp();

 

  bro1() {
    console.log("bro" + this.signIn.email+this.signIn.password+this.signUp.email+this.signUp.password+this.signUp.fullName);
  }

  



  constructor() {
    
    // signUp.fullName = ""
  }

  ngOnInit() {

  //  this.a = new learnerSignUp();
  //   console.log(this.a.fullName);
  //   console.log(this.signIn.email);
  }

}
