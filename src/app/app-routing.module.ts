import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

// AuthenticationGuard must be applied to all routes
const routes: Routes = [
  // {
  //   path: '',
  //   canActivate: [AuthenticationGuard],
  //   canActivateChild: [AuthenticationGuard],
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class AppRoutingModule {}
