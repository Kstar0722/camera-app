import { Action } from '@ngrx/store';
import { ICamera } from 'src/app/models/camera.interface';

export enum ECamerasActions {
  GetCameras = '[Cameras] Get Cameras',
  GetCamerasSuccess = '[Cameras] Get Cameras Success',
}

export class GetCameras implements Action {
  readonly type = ECamerasActions.GetCameras;
  constructor(public payload: string) { }
}

export class GetCamerasSuccess implements Action {
  readonly type = ECamerasActions.GetCamerasSuccess;
  constructor(public payload: Array<ICamera>) { }
}

export type CamerasActions =
  | GetCameras
  | GetCamerasSuccess;
