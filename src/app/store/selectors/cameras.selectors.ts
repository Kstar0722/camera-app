import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ICamerasState } from '../state/cameras.state';

const selectCameras = (state: IAppState) => state.cameras;

export const selectCameraList = createSelector(
  selectCameras,
  (state: ICamerasState) => state.cameras
);
