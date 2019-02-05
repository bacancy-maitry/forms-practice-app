import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileFormComponent],
  exports: [ProfileFormComponent]
})
export class ModelDrivenFormModule { }
