import { Action } from '@ngrx/store';
import { ILocation } from 'src/app/models/user.interface';

export enum ELocationsActions {
  SetSelectedLocation = '[Locations] Set SelectedLocation',
  GetLocations = '[Locations] Get Locations',
  GetLocationsSuccess = '[Locations] Get Locations Success',
}

export class SetSelectedLocation implements Action {
  readonly type = ELocationsActions.SetSelectedLocation;
  constructor(public payload: string) { }
}

export class GetLocations implements Action {
  readonly type = ELocationsActions.GetLocations;
}

export class GetLocationsSuccess implements Action {
  readonly type = ELocationsActions.GetLocationsSuccess;
  constructor(public payload: Array<ILocation>) { }
}

export type LocationsActions =
  | SetSelectedLocation
  | GetLocations
  | GetLocationsSuccess;
