import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonalDetails } from '../personal-details';

@Component({
  selector: 'app-personal-detail-form',
  templateUrl: './personal-detail-form.component.html',
  styleUrls: ['./personal-detail-form.component.css']
})
export class PersonalDetailFormComponent implements OnInit {

  languageArray = [
    'English',
    'Gujarati',
    'Hindi',
    'French',
  ]

  hobbiesArray = [
    'Cricket',
    'Reading',
    'Travelling',
    'Writing',
  ]

  formData: PersonalDetails = new PersonalDetails();
  @ViewChild('formData') formDetail: any;

  addDetails() {
    if (this.formDetail.valid) {
      console.log("Form Submitted");
      console.log("Submitted Data:::", this.formDetail.value);
      console.log("Full Name is:::", this.formDetail.firstName + " " + this.formDetail.lastName);
      this.formDetail.reset();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
