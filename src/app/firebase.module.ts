import { NgModule } from "@angular/core";
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
@NgModule({
    imports: [AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule, AngularFireAuthModule],
    exports: [AngularFireModule,AngularFireDatabaseModule,AngularFireAuthModule]
})

export class FirebaseModule { }