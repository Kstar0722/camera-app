import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/reducers/app.reducers';
import { LocationsEffects } from './store/effects/locations.effects';
import { CamerasEffects } from './store/effects/cameras.effects';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([LocationsEffects, CamerasEffects]),
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
