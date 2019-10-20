import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes = [
  {
    path: 'cameras',
    loadChildren: './cameras/cameras.module#CamerasModule'
  },
  {
    path: 'camera/:id',
    loadChildren: './camera/camera.module#CameraModule'
  },
  {
    path: '',
    redirectTo: 'cameras',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LocationModule { }
