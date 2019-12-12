import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopTrainingModalComponent } from './stop-training-modal.component';

describe('StopTrainingModalComponent', () => {
  let component: StopTrainingModalComponent;
  let fixture: ComponentFixture<StopTrainingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopTrainingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopTrainingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
