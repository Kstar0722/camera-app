import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InformationComponent } from './information.component';

const routes = [
  {
    path: '**',
    component: InformationComponent
  }
];

@NgModule({
  declarations: [InformationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class InformationModule { }
