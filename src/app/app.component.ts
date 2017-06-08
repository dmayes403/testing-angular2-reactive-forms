import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),  // <--- 1. initial state/value   2. single/array of validators   3. potential asynchronous validators
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male')    // <--- this and the other two are all form controls that will be connected to inputs in the form
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}
