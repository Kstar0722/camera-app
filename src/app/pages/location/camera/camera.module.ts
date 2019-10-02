import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './components/components.module';
import { CameraComponent } from './camera.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { PicturesComponent } from './pictures/pictures.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EventsComponent } from './events/events.component';
import { ComputerVisionComponent } from './computer-vision/computer-vision.component';
import { ApiSettingsComponent } from './api-settings/api-settings.component';

const routes = [
  {
    path: 'live-stream',
    component: LiveStreamComponent
  },
  {
    path: 'pictures',
    component: PicturesComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'computer-vision',
    component: ComputerVisionComponent
  },
  {
    path: 'api-settings',
    component: ApiSettingsComponent
  },
  {
    path: '',
    redirectTo: 'live-stream',
    pathMatch: 'full'
  },
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
    ComponentsModule,
  ]
})
export class CameraModule { }
