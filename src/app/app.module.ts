import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TrainingComponent } from './components/training/training.component';
import { CurrentTrainingComponent } from './components/training/current-training/current-training.component';
import { NewTrainingComponent } from './components/training/new-training/new-training.component';
import { PastTrainingComponent } from './components/training/past-training/past-training.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
//materials
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//forms
import { FormsModule } from '@angular/forms'
import { NavbarComponent } from './components/navbar/navbar.component';
import { StopTrainingModalComponent } from './components/training/current-training/modal/stop-training-modal/stop-training-modal.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { TrainingService } from './services/training/training.service';
import { FirebaseModule } from './firebase.module';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    NavbarComponent,
    StopTrainingModalComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    FirebaseModule
  ],
  providers: [AuthService, AuthGuard, TrainingService],
  bootstrap: [AppComponent],
  entryComponents : [StopTrainingModalComponent]
})
export class AppModule { }
