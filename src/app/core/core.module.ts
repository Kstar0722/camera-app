import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertAuthTokenInterceptor } from './interceptors/insert-auth-token-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';
import environment from '../../environments/environment';

// Reference: https://devblogs.microsoft.com/premier-developer/angular-how-to-microsoft-adal-for-angular-6-with-configurable-settings/

@NgModule({
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InsertAuthTokenInterceptor,
      multi: true
    },
    AuthenticationGuard
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MsAdalAngular6Module.forRoot(environment.adalConfig)
  ]
})
export class CoreModule { }
