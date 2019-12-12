import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators'
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  Excerises;
  
  constructor(private db: AngularFireDatabase, private authService: AuthService) {

  }
  runningEx;
  exChanged = new EventEmitter
  completedEx = []
  exComp = new EventEmitter()
  exFetched = new EventEmitter()
  loadingStatus = new EventEmitter()
  // exFinished = new EventEmitter()
  
  SetRunningEx(ex) {
    console.log(ex)
    this.runningEx = this.Excerises.find(i => i.id == ex)
    this.exChanged.emit(this.runningEx)


  }

  fetchEx() {
    this.loadingStatus.emit(true)
    this.db.list('exercises').snapshotChanges().pipe(map(data => {
      return data.map(a => {
        return { id: a.key, ...a.payload.val() }
      })
    }))
      .subscribe(data => {
        this.Excerises = data
        this.loadingStatus.emit(false)
        this.exFetched.emit(this.Excerises)
      })
  }

  completeEx() {
    this.addDataToDatabase({ ...this.runningEx, date: Date.now(), state: 'completed' })
    this.runningEx = null
    this.exComp.emit(this.completedEx)
    this.exChanged.emit(null)
  }

  cancelEx(progress) {

    this.addDataToDatabase({
      ...this.runningEx, duration: this.runningEx.duration * progress / 100,
      calories: this.runningEx.calories * progress / 100,
      date: Date.now(), state: 'cancelled'
    })
    this.runningEx = null
    this.exComp.emit(this.completedEx)
    this.exChanged.emit(null)
  }

  addDataToDatabase(data) {

    this.db.list('finishedEx/' + this.authService.getUser().uid).push(data)
  }

  fetchCompletedEx() {
    
    this.db.list('finishedEx/' + this.authService.getUser().uid).snapshotChanges().pipe(map(data => {
      return data.map(a => {
        return { id: a.key, ...a.payload.val() }
      })
    })).subscribe(data => {
      this.completedEx = data
      this.exComp.emit(this.completedEx)
    })
  }







}
