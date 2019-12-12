import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false
  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.authService.LoadingStatus.subscribe(data => {
      this.isLoading = data
    })
  }

  onSubmit(form : NgForm){
    this.authService.login({email : form.value.email, password : form.value.password})
  }
  loginWithGoogle(){
    this.authService.loginwithgoogle()
  }

}
