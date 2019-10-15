import { createSelector } from '@ngrx/store';

import { IAppState, ILocations } from './app.state';

const locationsState = (state: IAppState) => state.locations;

export const selectLocations = createSelector(
  locationsState,
  (state: ILocations) => state
);
