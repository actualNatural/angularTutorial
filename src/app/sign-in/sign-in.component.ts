import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, NgModel } from '@angular/forms';
import {User, user} from '../products'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private route: ActivatedRoute, private _router: Router) {}

  hide : boolean = true;

  atSignIn : boolean = true;








myFunction() {
  this.hide = !this.hide;
}


clickme(username:string,password:string) {
  if(username == 'KTab321' && password == 'Mr.Bean'){

    this.atSignIn = false;

    this._router.navigateByUrl('/home/home');
    

  }
  else{
    
    window.alert('Incorrect login information!');
  }
}
  

  

}
