import { createSelector, State } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ILocationsState } from '../state/locations.state';
import { ILocation } from 'src/app/models/user.interface';

const selectLocations = (state: IAppState) => state.locations;

export const selectLocationList = createSelector(
  selectLocations,
  (state: ILocationsState): Array<ILocation> => state.locations
);

export const selectSeletedLocation = createSelector(
  selectLocations,
  (state: ILocationsState): ILocation | undefined => {
    const selectedLocationId = state.selectedLocationId;
    if (selectedLocationId) {
      const index = state.locations.findIndex(item => item.id === selectedLocationId);
      return state.locations[index];
    }
    return undefined;
  }
);
