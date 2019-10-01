import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CameraComponent } from './camera.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { PicturesComponent } from './pictures/pictures.component';

const routes = [
  {
    path: '',
    component: CameraComponent
  },
  {
    path: 'live-stream',
    component: LiveStreamComponent
  },
  {
    path: 'pictures',
    component: PicturesComponent
  }
];

@NgModule({
  declarations: [CameraComponent, LiveStreamComponent, PicturesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CameraModule { }
