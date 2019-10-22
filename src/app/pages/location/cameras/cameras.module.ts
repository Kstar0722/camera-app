import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CamerasComponent } from './cameras.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes = [
  {
    path: '',
    // canActivate: [AuthenticationGuard],
    // canActivateChild: [AuthenticationGuard],
    component: CamerasComponent
  }
];

@NgModule({
  declarations: [CamerasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [AuthenticationGuard],
})
export class CamerasModule { }
