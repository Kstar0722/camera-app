import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ILocationsState } from '../state/locations.state';

const selectLocations = (state: IAppState) => state.locations;

export const selectLocationList = createSelector(
  selectLocations,
  (state: ILocationsState) => state.locations
);
