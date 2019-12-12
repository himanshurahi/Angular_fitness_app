import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-stop-training-modal',
  templateUrl: './stop-training-modal.component.html',
  styleUrls: ['./stop-training-modal.component.css']
})
export class StopTrainingModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit() {
  }

}
