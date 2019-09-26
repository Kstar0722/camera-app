import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CamerasComponent } from './pages/cameras/cameras.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationComponent } from './pages/location/location.component';
import { CameraComponent } from './pages/camera/camera.component';
import { NotificationCenterComponent } from './pages/notification-center/notification-center.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CamerasComponent,
    LocationsComponent,
    LocationComponent,
    CameraComponent,
    NotificationCenterComponent,
    ProfileComponent,
    TemplateComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
