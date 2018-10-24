import { Component, OnInit } from '@angular/core';
//import { learnerSignIn, learnerSignUp } from './learner-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import {FormsModule} from '@angular/forms';
import { TestService } from '../test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.css']
})
export class LearnerComponent implements OnInit {

  
  myBool:any;

  registerForm: FormGroup;
  registerForm1:FormGroup;
  submitted = false;
  submitted1=false;

  constructor(private formBuilder: FormBuilder,private http:HttpClient, private test:TestService,private router:Router) { }


  ngOnInit() {

   this.registerForm = this.formBuilder.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
});


this.registerForm1 = this.formBuilder.group({
    //firstName: ['', Validators.required],
    fullName: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]]
});

   
  }

  get f() { return this.registerForm.controls; }

  get f1() { return this.registerForm1.controls; }

    onSubmit(signIn) {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        console.log( signIn.email);

       if(this.test.learnerSignIn(signIn))
       {
        alert('YOU ARE SUCCESSFULLY SIGNED IN!!')
       }
       else
       {
        alert('UNSUCCESSFULL ATTEMPT!!')
       }


        
    }

    onSubmit1(signUp) {
      this.submitted1 = true;

      // stop here if form is invalid
      if (this.registerForm1.invalid) {
          return;
      }

      console.log( signUp.email);
      
      this.myBool= this.test.learnerSignUp(signUp);

      if(this.myBool==true)
      {
        alert('YOU ARE SUCCESSFULLY REGISTERED!!');
      }
      else{
        alert('INVALID ATTEMPT!!');
      }
      
  }

}
