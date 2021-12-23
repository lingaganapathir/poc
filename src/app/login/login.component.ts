import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //router: any;

  login:Login;
  constructor(private router: Router) {
    this.login = new Login;
   }

  ngOnInit(): void {
  }

  

  write(){
    if(this.login.uname == "admin" && this.login.pass == "1234"){
      console.log("logged in succesfully.");
      this.router.navigateByUrl('/list');
    }
    else{
      //console.log("wrong username / password.")
      alert("wrong username / password." )
    }
  }

  onkeyupun(input:string){
    this.login.uname = input;
    
  }
  onkeyuppw(input:string){
    this.login.pass = input;
    
  }
  popupalert(){
    alert("Enter username and password");
  }

}
