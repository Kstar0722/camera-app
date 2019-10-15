import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, mapTo, concatMapTo } from 'rxjs/operators';

import {
  EAppActions,
  GetDomainName,
  GetDomainData,
  GetDomainDataSuccess,
  GetActualData,
  SetActualData,
  GetActualDataSuccess,
  UpdateGroupColor,
  UpdateGroupColorSuccess,
  UpdateGroupOrder,
  UpdateGroupOrderSuccess,
  GetChartData,
  GetChartDataSuccess,
  SetChartData,
  UpdateShowHideTeam,
  UpdateShowHideTeamSuccess
} from './app.actions';

import { ChartDataService } from 'app/service/chart-data.service';
import { ParsingService } from 'app/service/parsing.service';
import { IActualData, IChartData } from './app.state';

@Injectable()
export class AppEffects {
  constructor(
    private _action$: Actions,
    private _chartDataService: ChartDataService,
    private _parsingService: ParsingService
  ) { }

  @Effect()
  getDomainData$ = this._action$.pipe(
    ofType<GetDomainName>(EAppActions.GetDomainName),
    switchMap(action => this._chartDataService.getTxtData(action.payload)),
    switchMap((txtData: [string, string]) => [
      new GetDomainData(txtData),
      new GetDomainDataSuccess()
    ])
  );

  @Effect()
  getActualData$ = this._action$.pipe(
    ofType<GetActualData>(EAppActions.GetActualData),
    switchMap(action => this._parsingService.parsingHumansTxtAndTeamsTxt(action.payload.humansTxt.new, action.payload.teamsTxt.new)),
    switchMap((actualData: IActualData) => [
      new SetActualData(actualData),
      new GetActualDataSuccess()
    ])
  );

  @Effect()
  getChartData$ = this._action$.pipe(
    ofType<GetChartData>(EAppActions.GetChartData),
    switchMap(action => this._chartDataService.getChartdata(action.payload)),
    switchMap((chartData: IChartData) => [
      new SetChartData(chartData),
      new GetChartDataSuccess()
    ])
  );

  @Effect()
  updateGroupColor$ = this._action$.pipe(
    ofType<UpdateGroupColor>(EAppActions.UpdateGroupColor),
    switchMap(action => [new UpdateGroupColorSuccess()])
  );

  @Effect()
  updateGroupOrder$ = this._action$.pipe(
    ofType<UpdateGroupOrder>(EAppActions.UpdateGroupOrder),
    switchMap(action => [new UpdateGroupOrderSuccess()])
  );

  @Effect()
  updateShowHideTeam$ = this._action$.pipe(
    ofType<UpdateShowHideTeam>(EAppActions.UpdateShowHideTeam),
    switchMap(action => [new UpdateShowHideTeamSuccess()])
  );
}