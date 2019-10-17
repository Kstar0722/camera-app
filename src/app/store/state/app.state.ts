import { RouterReducerState } from '@ngrx/router-store';
import { ILocationsState, initialLocationsState } from './locations.state';
import { ICamerasState, initialCamerasState } from './cameras.state';

export interface IAppState {
  router?: RouterReducerState;
  locations: ILocationsState;
  cameras: ICamerasState;
}

export const initialAppState: IAppState = {
  locations: initialLocationsState,
  cameras: initialCamerasState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
