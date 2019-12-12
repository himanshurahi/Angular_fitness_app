import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from 'src/app/services/training/training.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() traningStart = new EventEmitter()
  exercises;
  loading = true
  constructor(private trainingService: TrainingService, private db: AngularFireDatabase) { }

  ngOnInit() {
    // this.exercises = this.trainingService.Excerises

    // this.db.list('exercises/').snapshotChanges().subscribe(data => {
    //   let arr = []
    //   data.map(i => {
    //     arr.push({ id: i.key, ...i.payload.val() })
    //   })
    //   this.exercises = arr
    // })
    this.trainingService.loadingStatus.subscribe(data => {
      this.loading = data
    })
    this.trainingService.fetchEx()
    
    this.trainingService.exFetched.subscribe(data => {
      this.exercises = data
    })

  }

  onStartNewTraining(data) {

    this.trainingService.SetRunningEx(data.value.ex)
    // this.traningStart.emit()
  }

}
