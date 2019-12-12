import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { TrainingService } from 'src/app/services/training/training.service';
import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, OnDestroy {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state']
  dataSource = new MatTableDataSource
  constructor(private trainingService: TrainingService) { }
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  ngOnInit() {

    console.log('Past Component')

    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator;
    this.trainingService.fetchCompletedEx()
    this.trainingService.exComp.subscribe(data => {
      console.log(data)
      this.dataSource.data = data
    })
    // this.dataSource.data = [{date : '1', name : 'burpees', duration : '30', calories : '10', state : 'dome'},{date : '1', name : 'burpees', duration : '30', calories : '10', state : 'dome'}]
  }

  ngOnDestroy(){
    console.log('Past Destroyed')
  }



}
