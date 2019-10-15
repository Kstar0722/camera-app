import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app.state';
import { AppActions, ELocationActions } from './app.actions';

// ============================================================================================================

export const initialLocations = {
  locations: [],
};

export function locationsReducer(state = initialLocations, action: AppActions): any {
  switch (action.type) {

    case ELocationActions.GetLocationsSuccess: {
      state.locations = action.payload;
      return state;
    }

    default: {
      return state;
    }

  }
}

// ============================================================================================================

export const appReducer: ActionReducerMap<IAppState, any> = {
  locations: locationsReducer
};
