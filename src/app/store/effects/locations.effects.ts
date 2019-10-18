import { Injectable } from '@angular/core';

import {
  GetLocations,
  GetLocationsSuccess,
  ELocationsActions
} from '../actions/locations.actions';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { LocationsService } from 'src/app/service/locations.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { switchMap } from 'rxjs/operators';
import { ILocation } from 'src/app/models/user.interface';
import { of } from 'rxjs';

@Injectable()
export class LocationsEffects {
  constructor(
    private locationsService: LocationsService,
    private action$: Actions,
    private store: Store<IAppState>
  ) {}
  @Effect()
  getLocations$ = this.action$.pipe(
    ofType<GetLocations>(ELocationsActions.GetLocations),
    switchMap(() => this.locationsService.getLocations()),
    switchMap((locations: Array<ILocation>) => of(new GetLocationsSuccess(locations)))
  );
}
