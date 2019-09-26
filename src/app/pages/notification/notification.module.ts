import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotificationComponent } from './notification.component';

const routes = [
  {
    path: '**',
    component: NotificationComponent
  }
];

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class NotificationModule { }
