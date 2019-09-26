import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

// AuthenticationGuard must be applied to all routes
// const routes: Routes = [
//   {
//     path: '',
//     canActivate: [AuthenticationGuard],
//     canActivateChild: [AuthenticationGuard],
//     redirectTo: '/dashboard',
//     pathMatch: 'full'
//   }
// ];

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
    path: 'location',
    loadChildren: './pages/location/location.module#LocationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class AppRoutingModule { }
