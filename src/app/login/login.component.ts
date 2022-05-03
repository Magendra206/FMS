import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Login Here...."
  login:string ='';
  password:string ='';

  forSubmitted = false;

  constructor() { }

  ngOnInit(): void {
  }
  readLoginDetails(loginform: any){
    console.log("submitted the form....")
      console.log(loginform)
  }

}
