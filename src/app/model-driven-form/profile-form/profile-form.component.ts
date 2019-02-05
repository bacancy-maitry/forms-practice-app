import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  languageArray: string[] = [
    'English',
    'Guajarati',
    'Hindi',
    'French',
  ]

  hobbiesArray: string[] = [
    'Cricket',
    'Reading',
    'Travelling',
    'Writing'
  ]

  formData: FormGroup;
  fullName: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  gender: FormControl;
  email: FormControl;
  contactNo: FormControl;
  hobbies: FormControl;
  password: FormControl;
  language: FormControl;


  constructor() {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    // console.log(this.formData);
    // console.log(this.fullName);
  }

  createFormControls() {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
    this.gender = new FormControl("", Validators.required);
    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*.[^ @]*"),
    ]);
    this.contactNo = new FormControl("", [
      Validators.required,
      Validators.pattern("[0-9]*"),
    ]);
    this.hobbies = new FormControl("", Validators.required);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.language = new FormControl("", Validators.required);
  }

  createForm() {
    this.formData = new FormGroup({
      fullName: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),

      gender: this.gender,
      email: this.email,
      contactNo: this.contactNo,
      hobbies: this.hobbies,
      password: this.password,
      language: this.language,
    });
  }

  submitForm() {
    if (this.formData.valid) {
      console.log("Form Submitted");
      console.log("FormData is:::",this.formData.value);
      // console.log(this.fullName.value);
      console.log("FullName is:::",this.formData.controls.fullName.value);
      this.formData.reset();
    }
  }
}
