import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CamerasComponent } from './cameras.component';

const routes = [
  {
    path: '',
    component: CamerasComponent
  }
];

@NgModule({
  declarations: [CamerasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CamerasModule { }
