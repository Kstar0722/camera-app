import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';

import {
  ELocationActions,
  GetLocations,
  GetLocationsSuccess
} from './app.actions';

import { ILocation } from './app.state';
import { LocationsService } from '../service/locations.service';

@Injectable()
export class AppEffects {
  constructor(
    private _action$: Actions,
    private locationsService: LocationsService
  ) { }

  @Effect()
  getLocations$ = this._action$.pipe(
    ofType<GetLocations>(ELocationActions.GetLocations),
    switchMap(action => this.locationsService.getLocations()),
    switchMap((locations: Array<ILocation>) => [
      new GetLocationsSuccess(locations)
    ])
  );
}
