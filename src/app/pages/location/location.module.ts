import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LocationComponent } from './location.component';

const routes = [
  {
    path: ':id',
    component: LocationComponent
  },
];

@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LocationModule { }
