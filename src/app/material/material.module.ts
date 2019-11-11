import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSortModule, MatPaginatorModule, MatCardModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatSnackBarModule
  ],exports:[
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
