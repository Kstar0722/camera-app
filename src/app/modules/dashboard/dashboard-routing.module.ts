import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TemplateComponent } from "./template/template.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { CamerasComponent } from "./pages/cameras/cameras.component";
import { LocationsComponent } from "./pages/locations/locations.component";
import { LocationComponent } from "./pages/location/location.component";
import { CameraComponent } from "./pages/camera/camera.component";
import { NotificationCenterComponent } from "./pages/notification-center/notification-center.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { AuthenticationGuard } from "microsoft-adal-angular6";

const routes: Routes = [
  {
    path: "dashboard",
    component: TemplateComponent,
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthenticationGuard],
    children: [
      { path: "", component: DashboardComponent },
      { path: "cameras", component: CamerasComponent },
      { path: "locations", component: LocationsComponent },
      { path: "location/:locationId", component: LocationComponent },
      {
        path: "location/:locationId/camera/:cameraId",
        component: CameraComponent
      },
      { path: "notification-center", component: NotificationCenterComponent },
      { path: "profile", component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
