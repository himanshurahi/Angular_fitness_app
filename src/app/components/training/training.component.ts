import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/services/training/training.service';

import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  training = false
  constructor(private trainingService: TrainingService, private db: AngularFireDatabase) { }

  ngOnInit() {
    // this.db.list('exercises').push({
    //   name: 'burpee1s',
    //   duration: '10',
    //   calories: '30'

    // })
    this.trainingService.exChanged.subscribe((data: any) => {
      if (data) {
        console.log(data)
        this.training = true
      } else {
        console.log(data)
        this.training = false
      }
    })
  }

}
