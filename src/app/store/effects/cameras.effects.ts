import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { CamerasService } from 'src/app/service/cameras.service';
import { ICamera } from 'src/app/models/camera.interface';
import { GetCamerasSuccess, GetCameras, ECamerasActions } from '../actions/cameras.actions';
import { IAppState } from '../state/app.state';

@Injectable()
export class CamerasEffects {
  constructor(
    private camerasService: CamerasService,
    private action$: Actions,
    private store: Store<IAppState>
  ) { }
  @Effect()
  getCameras$ = this.action$.pipe(
    ofType<GetCameras>(ECamerasActions.GetCameras),
    switchMap((action) => this.camerasService.getCameras(action.payload)),
    switchMap((cameras: Array<ICamera>) => of(new GetCamerasSuccess(cameras)))
  );
}
