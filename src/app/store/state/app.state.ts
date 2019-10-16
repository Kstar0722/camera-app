import { RouterReducerState } from '@ngrx/router-store';
import { ILocationsState, initialLocationsState } from './locations.state';

export interface IAppState {
  router?: RouterReducerState;
  locations: ILocationsState;
}

export const initialAppState: IAppState = {
  locations: initialLocationsState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
