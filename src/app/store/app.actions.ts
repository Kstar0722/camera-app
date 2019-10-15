import { Action } from '@ngrx/store';
import { IDomainData, IActualData, IChartData } from './app.state';
import { TodoItemFlatNode } from 'app/layout/components/chart-settings-panel/team-tree/team-tree.component';

export enum EAppActions {
  GetDomainName = '[DomainData] Get Domain Name',
  GetDomainData = '[DomainData] Get Domain Data',
  GetDomainDataSuccess = '[DomainData] Get Domain Data Success',

  GetActualData = '[ActualData] Get Actual Data',
  SetActualData = '[ActualData] Set Actual Data',
  GetActualDataSuccess = '[ActualData] Get Actual Data Success',
  UpdateGroupColor = '[ActualData] Update Group Color',
  UpdateGroupColorSuccess = '[ActualData] Update Group Color Success',
  UpdateGroupOrder = '[ActualData] Update Group Order',
  UpdateGroupOrderSuccess = '[ActualData] Update Group Order Success',
  UpdateShowHideTeam = '[ActualData] Update Show/Hide Team',
  UpdateShowHideTeamSuccess = '[ActualData] Update Show/Hide Team Success',

  GetChartData = '[ChartData] Get Chart Data',
  SetChartData = '[ChartData] Set Chart Data',
  GetChartDataSuccess = '[ChartData] Get Chart Data Success',

  UpdatedShowNameState = '[NodeOption] Updated Show Name State Success',
  UpdatedShowTitleState = '[NodeOption] Updated Show Title State Success',
  UpdatedShowPeopleWithNoTeamsState = '[NodeOption] Updated Show People With No Teams State Success'
}

// ================================================================

export class GetDomainName implements Action {
  readonly type = EAppActions.GetDomainName;
  constructor(public payload: string) { }
}

export class GetDomainData implements Action {
  readonly type = EAppActions.GetDomainData;
  constructor(public payload: [string, string]) { }
}

export class GetDomainDataSuccess implements Action {
  readonly type = EAppActions.GetDomainDataSuccess;
}

export class GetActualData implements Action {
  readonly type = EAppActions.GetActualData;
  constructor(public payload: IDomainData) { }
}

export class SetActualData implements Action {
  readonly type = EAppActions.SetActualData;
  constructor(public payload: IActualData) { }
}

export class GetActualDataSuccess implements Action {
  readonly type = EAppActions.GetActualDataSuccess;
}

export class UpdateGroupColor implements Action {
  readonly type = EAppActions.UpdateGroupColor;
  constructor(public payload: { index: number, color: string }) { };
}

export class UpdateGroupColorSuccess implements Action {
  readonly type = EAppActions.UpdateGroupColorSuccess;
}

export class UpdateGroupOrder implements Action {
  readonly type = EAppActions.UpdateGroupOrder;
  constructor(public payload: number[]) { }
}

export class UpdateGroupOrderSuccess implements Action {
  readonly type = EAppActions.UpdateGroupOrderSuccess;
}

export class UpdateShowHideTeam implements Action {
  readonly type = EAppActions.UpdateShowHideTeam;
  constructor(public payload: Array<TodoItemFlatNode>) { }
}

export class UpdateShowHideTeamSuccess implements Action {
  readonly type = EAppActions.UpdateShowHideTeamSuccess
}

export class GetChartData implements Action {
  readonly type = EAppActions.GetChartData;
  constructor(public payload: IActualData) { }
}

export class SetChartData implements Action {
  readonly type = EAppActions.SetChartData;
  constructor(public payload: IChartData) { }
}

export class GetChartDataSuccess implements Action {
  readonly type = EAppActions.GetChartDataSuccess;
}

export class UpdatedShowNameState implements Action {
  readonly type = EAppActions.UpdatedShowNameState;
}

export class UpdatedShowTitleState implements Action {
  readonly type = EAppActions.UpdatedShowTitleState;
}

export class UpdatedShowPeopleWithNoTeamsState implements Action {
  readonly type = EAppActions.UpdatedShowPeopleWithNoTeamsState;
}

// ================================================================

export type AppActions =
  | GetDomainName
  | GetDomainData
  | GetDomainDataSuccess
  | GetActualData
  | SetActualData
  | GetActualDataSuccess
  | UpdateGroupColor
  | UpdateGroupColorSuccess
  | UpdateGroupOrder
  | UpdateGroupOrderSuccess
  | UpdateShowHideTeam
  | UpdateShowHideTeamSuccess
  | GetChartData
  | SetChartData
  | GetChartDataSuccess
  | UpdatedShowNameState
  | UpdatedShowTitleState
  | UpdatedShowPeopleWithNoTeamsState;