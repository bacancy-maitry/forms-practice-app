import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalDetailFormComponent } from './personal-detail-form/personal-detail-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PersonalDetailFormComponent],
  exports: [PersonalDetailFormComponent],
})
export class TemplateDrivenFormModule { }
