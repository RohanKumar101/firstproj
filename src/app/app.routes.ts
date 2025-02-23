import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Table1Component } from './table1/table1.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'table1', component: Table1Component }, // Add this
  ];
