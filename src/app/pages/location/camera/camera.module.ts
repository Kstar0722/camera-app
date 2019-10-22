import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../shared/shared.module';

import { CameraComponent } from './camera.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { PicturesComponent } from './pictures/pictures.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EventsComponent } from './events/events.component';
import { ComputerVisionComponent } from './computer-vision/computer-vision.component';
import { ApiSettingsComponent } from './api-settings/api-settings.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes = [
  {
    path: '',
    redirectTo: 'live-stream',
    pathMatch: ''
  },
  {
    path: '',
    component: CameraComponent,
    children: [
      {
        path: 'live-stream',
        // canActivate: [AuthenticationGuard],
        // canActivateChild: [AuthenticationGuard],
        component: LiveStreamComponent
      },
      {
        path: 'pictures',
        // canActivate: [AuthenticationGuard],
        // canActivateChild: [AuthenticationGuard],
        component: PicturesComponent
      },
      {
        path: 'analytics',
        // canActivate: [AuthenticationGuard],
        // canActivateChild: [AuthenticationGuard],
        component: AnalyticsComponent
      },
      {
        path: 'events',
        // canActivate: [AuthenticationGuard],
        // canActivateChild: [AuthenticationGuard],
        component: EventsComponent
      },
      {
        path: 'computer-vision',
        // canActivate: [AuthenticationGuard],
        // canActivateChild: [AuthenticationGuard],
        component: ComputerVisionComponent
      },
      {
        path: 'api-settings',
        // canActivate: [AuthenticationGuard],
        // canActivateChild: [AuthenticationGuard],
        component: ApiSettingsComponent
      },
    ],
  }
];

@NgModule({
  declarations: [
    CameraComponent,
    LiveStreamComponent,
    PicturesComponent,
    AnalyticsComponent,
    EventsComponent,
    ComputerVisionComponent,
    ApiSettingsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    SharedModule
  ],
  providers: [AuthenticationGuard],
})
export class CameraModule { }
