import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
})
export class UserModule {}
