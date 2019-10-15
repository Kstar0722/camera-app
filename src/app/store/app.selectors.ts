import { createSelector } from '@ngrx/store';

import { IAppState, IGroup, IDomainData } from './app.state';

const domainDataState = (state: IAppState) => state.domainData;
const groups = (state: IAppState) => state.actualData.groups;

export const selectDomain = createSelector(
  domainDataState,
  (state: IDomainData) => state
);

export const selectGroups = createSelector(
  groups,
  (state: IGroup[]) => state
);
