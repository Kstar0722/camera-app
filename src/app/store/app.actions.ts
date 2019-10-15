import { Action } from '@ngrx/store';
import { ILocation } from './app.state';

export enum ELocationActions {
  GetLocations = '[Locations] Get Locations',
  GetLocationsSuccess = '[Locations] Get Locations Success',
}

// ================================================================

export class GetLocations implements Action {
  readonly type = ELocationActions.GetLocations;
}

export class GetLocationsSuccess implements Action {
  readonly type = ELocationActions.GetLocationsSuccess;
  constructor(public payload: Array<ILocation>) { }
}

// ================================================================

export type AppActions =
  | GetLocations
  | GetLocationsSuccess;
