import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, mapTo, concatMapTo } from 'rxjs/operators';

import {
  ELocationActions,
  GetLocations,
  GetLocationsSuccess
} from './app.actions';

import { ILocation } from './app.state';

@Injectable()
export class AppEffects {
  constructor(
    private _action$: Actions
  ) { }

  @Effect()
  getLocations$ = this._action$.pipe(
    ofType<GetLocations>(ELocationActions.GetLocations),
    switchMap(action => this._chartDataService.getTxtData(action.payload)),
    switchMap((locations: Array<ILocation>) => [
      new GetLocationsSuccess(locations)
    ])
  );
}
