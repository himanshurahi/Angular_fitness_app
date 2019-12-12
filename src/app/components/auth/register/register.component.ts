import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  maxDate;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.maxDate = new Date()
    this.maxDate.setYear(this.maxDate.getFullYear() - 18)


  }

  onSubmit(form: NgForm) {
    console.log(form)
    this.authService.register({
      email : form.value.email,
      password : form.value.password

    })
  }

}
