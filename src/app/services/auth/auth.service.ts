import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User;
  AuthChange = new EventEmitter()
  LoadingStatus = new EventEmitter()
  constructor(private router: Router, private afauth: AngularFireAuth, private snakbar: MatSnackBar) {

  }

  register(data) {
    this.LoadingStatus.emit(true)
    this.afauth.auth.createUserWithEmailAndPassword(data.email, data.password).then(res => {
      console.log(res)
      this.LoadingStatus.emit(false)
    }, error => {
      console.log(error)
      this.snakbar.open(error.message, 'Close', {
        duration: 3000
      });
      this.LoadingStatus.emit(false)
    })
    // this.User = {
    //   id: 1,
    //   email: data.email,
    //   userId: data.id
    // }

  }

  AuthChanged() {

    this.afauth.authState.subscribe(user => {
      if (user) {
        this.User = user
        console.log(this.User)
        this.AuthChange.emit(true)

        this.router.navigate(['/training'])
      } else {
        this.User = null
        this.AuthChange.emit(false)
        this.router.navigate(['/login'])

      }
    })
  }

  login(data) {
    this.LoadingStatus.emit(true)
    this.afauth.auth.signInWithEmailAndPassword(data.email, data.password).then(data => {
      console.log(data)
      this.LoadingStatus.emit(false)
    }, error => {
      console.log(error)
      this.snakbar.open(error.message, 'Close', {
        duration: 3000
      });
      this.LoadingStatus.emit(false)
    })
    // this.User = {
    //   email: data.email,
    //   userId: data.id
    // }
  }

  loginwithgoogle() {
    this.afauth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(data => {
      this.User = data
    })
  }

  logout() {
    this.User = null

    this.afauth.auth.signOut()

  }

  getUser() {
    return this.User;
  }

  isAuth() {

    // return this.User !== null
    return this.User != null
  }
}
