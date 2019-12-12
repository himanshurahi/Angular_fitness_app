import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
    imports: [MatButtonModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
        MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSnackBarModule],
    exports: [MatButtonModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
        MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSnackBarModule]
})
export class MaterialModule { }