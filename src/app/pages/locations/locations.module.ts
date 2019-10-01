import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LocationsComponent } from './locations.component';

const routes = [
  {
    path: '',
    component: LocationsComponent
  },
];

@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LocationsModule { }
