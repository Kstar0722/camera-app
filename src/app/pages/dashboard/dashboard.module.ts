import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes = [
  {
    path: '**',
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthenticationGuard],
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [AuthenticationGuard],
})
export class DashboardModule { }
