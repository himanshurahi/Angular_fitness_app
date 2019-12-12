import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingModalComponent } from './modal/stop-training-modal/stop-training-modal.component';
import { Router } from '@angular/router';
import { TrainingService } from 'src/app/services/training/training.service';


@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer;
  completed = false
  t;
  @Output() trainingExit = new EventEmitter()
  constructor(public dialog: MatDialog, public router: Router, private trainingService: TrainingService) { }

  ngOnInit() {
    this.t = this.trainingService.runningEx
    this.MyTimer()
    console.log()

  }

  MyTimer() {
    const step = this.t.duration / 100 * 1000
    this.timer = setInterval(() => {
      this.progress = this.progress + 1

      if (this.progress >= 100) {

        // this.completed = true
        this.trainingService.completeEx()
        clearInterval(this.timer)

      }
    }, step)
  }


  onStop() {
    clearInterval(this.timer)
    console.log('stop')
    const ref = this.dialog.open(StopTrainingModalComponent, {
      data: {
        progress: this.progress
      }
    })

    ref.afterClosed().subscribe(data => {
      if (data) {
        // this.trainingExit.emit()
        this.trainingService.cancelEx(this.progress)
      } else {
        this.MyTimer()
      }
    })



  }

  goBack() {
    this.trainingExit.emit()
  }

}
