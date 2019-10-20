import { ELocationsActions, LocationsActions } from './../actions/locations.actions';
import { initialLocationsState, ILocationsState } from '../state/locations.state';

export const locationsReducers = (
  state = initialLocationsState,
  action: LocationsActions
): ILocationsState => {
  switch (action.type) {
    case ELocationsActions.GetLocations: {
      return {
        ...state
      };
    }
    case ELocationsActions.GetLocationsSuccess: {
      return {
        ...state,
        locations: action.payload
      };
    }
    case ELocationsActions.SetSelectedLocation: {
      return {
        ...state,
        selectedLocationId: action.payload
      };
    }
    default:
      return state;
  }
};
