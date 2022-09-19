import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('f') signUpForm :NgForm;
  genders=['Male','Female'];
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // onSubmit(f:NgForm){
  //   console.log(f);
  // }

  onSubmit(){
    console.log(this.signUpForm);
  }
}
