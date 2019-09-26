import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LocationComponent } from './location.component';

const routes = [
  {
    path: '',
    component: LocationComponent
  },
  {
    path: 'cameras',
    loadChildren: './cameras/cameras.module#CamerasModule'
  },
  {
    path: 'camera/:id',
    loadChildren: './camera/camera.module#CameraModule'
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
