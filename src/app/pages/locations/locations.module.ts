import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LocationsComponent } from './locations.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes = [
  {
    path: '',
    // canActivate: [AuthenticationGuard],
    // canActivateChild: [AuthenticationGuard],
    component: LocationsComponent
  },
];

@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [AuthenticationGuard],
})
export class LocationsModule { }
