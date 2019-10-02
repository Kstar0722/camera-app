import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraHeaderComponent } from './camera-header/camera-header.component';

@NgModule({
  declarations: [
    CameraHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CameraHeaderComponent
  ]
})
export class ComponentsModule { }
