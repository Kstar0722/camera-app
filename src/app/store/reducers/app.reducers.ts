import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';

import { locationsReducers } from './locations.reducers';
import { camerasReducers } from './cameras.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  locations: locationsReducers,
  cameras: camerasReducers
};
