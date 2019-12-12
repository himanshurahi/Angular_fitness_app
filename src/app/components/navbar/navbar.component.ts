import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth = false
  User;
  open = false
  constructor(private authService: AuthService) { }
  

  ngOnInit() {
    this.authService.AuthChange.subscribe(data => {
      this.isAuth = data
      this.User = this.authService.User
    })
  }

  toggleSideNav(){
    this.open = !this.open
  }
  onLogout() {

    this.open = false
    this.User = null
    console.log('logged Out')

    this.authService.logout()
   
  }



}
