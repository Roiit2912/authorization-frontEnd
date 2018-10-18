import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sme',
  templateUrl: './sme.component.html',
  styleUrls: ['./sme.component.css']
})
export class SmeComponent implements OnInit {
  signIn:any;

  registerForm: FormGroup;
  registerForm1:FormGroup;
  submitted = false;
  submitted1=false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
   // console.log(this.signIn.email);

   this.registerForm = this.formBuilder.group({
    // firstName: ['', Validators.required],
    // lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
});


this.registerForm1 = this.formBuilder.group({
   fullName: ['', Validators.required],
  // lastName: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]]
});

   
  }

  myclick(signIn)
  {
    console.log( signIn.password+"bro");
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

        alert('SUCCESS!! :-)')
    }

    onSubmit1(signUp) {
      this.submitted1 = true;

      // stop here if form is invalid
      if (this.registerForm1.invalid) {
          return;
      }

      console.log( signUp.email);

      alert('SUCCESS!! :-)')
  }


}
