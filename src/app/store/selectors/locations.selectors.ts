import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ILocationsState } from '../state/locations.state';

const selectUsers = (state: IAppState) => state.locations;

export const selectLocationList = createSelector(
  selectUsers,
  (state: ILocationsState) => state.locations
);
