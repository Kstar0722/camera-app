import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'locations',
    loadChildren: './pages/locations/locations.module#LocationsModule'
  },
  {
    path: 'location/:id',
    loadChildren: './pages/location/location.module#LocationModule'
  },
  {
    path: 'notification',
    loadChildren: './pages/notification/notification.module#NotificationModule'
  },
  {
    path: 'my-info',
    loadChildren: './pages/information/information.module#InformationModule'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class AppRoutingModule { }
