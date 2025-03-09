import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Table1Component } from './table1/table1.component';
import { Progressspinner1Component } from './progressspinner1/progressspinner1.component';
import { Avater1Component } from './avater1/avater1.component';
import {ScrolldownComponent} from './scrolldown/scrolldown.component';
import{Pogressbar1Component} from './pogressbar1/pogressbar1.component';
import { Badge1Component } from './badge1/badge1.component';
import { Galleria1Component } from './galleria1/galleria1.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'table1', component: Table1Component }, // Add this
    {path: 'progressspinner1', component: Progressspinner1Component},
    {path: 'avater1', component: Avater1Component},
    {path: 'scrolldown', component: ScrolldownComponent},
    {path: 'pogressbar1', component: Pogressbar1Component},
    {path: 'badge1', component: Badge1Component},
    {path: 'galleria1', component: Galleria1Component}
  ];
