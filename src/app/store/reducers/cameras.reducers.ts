import { initialCamerasState, ICamerasState } from '../state/cameras.state';
import { CamerasActions, ECamerasActions } from '../actions/cameras.actions';


export const camerasReducers = (
  state = initialCamerasState,
  action: CamerasActions
): ICamerasState => {
  switch (action.type) {
    case ECamerasActions.GetCameras: {
      return {
        ...state
      };
    }
    case ECamerasActions.GetCamerasSuccess: {
      return {
        ...state,
        cameras: action.payload
      };
    }

    default:
      return state;
  }
};
