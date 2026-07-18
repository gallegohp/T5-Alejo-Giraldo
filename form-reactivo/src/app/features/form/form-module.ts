import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUser } from './components/form-user/form-user';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormUser
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormUser
  ]
})
export class FormModule { }
