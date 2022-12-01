import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {User, user} from '../products'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private route: ActivatedRoute) { }

  hide : boolean = true;

  atSignIn : boolean = true;

myFunction() {
  this.hide = !this.hide;
}
signIn(){
  this.atSignIn = !this.atSignIn;
}
  

  

}
