import { ActionReducerMap } from '@ngrx/store';
import { IAppState, IDomainData, IActualData, IChartData, INodeOptions } from './app.state';
import { AppActions, EAppActions } from './app.actions';

declare let vis: any;

// ============================================================================================================

export const initialDomainData = {
  domainName: '',

  humansTxt: {
    original: '',
    new: ''
  },

  teamsTxt: {
    original: '',
    new: ''
  }
};

export function domainDataReducer(state = initialDomainData, action: AppActions): IDomainData {

  switch (action.type) {

    case EAppActions.GetDomainName: {
      state.domainName = action.payload;
      return state;
    }

    case EAppActions.GetDomainData: {
      state.humansTxt.original = state.humansTxt.new = action.payload[0];
      state.teamsTxt.original = state.teamsTxt.new = action.payload[1];

      return state;
    }

    default: {
      return state;
    }

  }

}

// ============================================================================================================

export const initialActualData = {
  members: [],
  groups: []
};

export function actualDataReducer(state = initialActualData, action: AppActions): IActualData {

  switch (action.type) {

    case EAppActions.SetActualData: {
      state = action.payload;
      return state;
    }

    case EAppActions.UpdateGroupColor: {
      state.groups[action.payload.index].color = action.payload.color;
      return state;
    }

    case EAppActions.UpdateGroupOrder: {
      action.payload.forEach((order, index) => {
        state.groups[index].order = order;
      });
      return state;
    }

    case EAppActions.UpdateShowHideTeam: {
      state.groups.forEach(group => {
        group.hidden = true;

        group.teams.forEach(team => {
          team.hidden = true;
        });
      });

      action.payload.forEach(status => {
        if (status.teamIndex === -1) {
          state.groups[status.groupIndex].hidden = false;
        } else {
          state.groups[status.groupIndex].teams[status.teamIndex].hidden = false;
        }
      });
      return state;
    }

    default: {
      return state;
    }

  }

}

// ============================================================================================================

export const initialChartData = {
  data: {
    nodes: new vis.DataSet(),
    edges: new vis.DataSet()
  },
  options: {}
};

export function chartDataReducer(state = initialChartData, action: AppActions): IChartData {
  switch (action.type) {

    case EAppActions.SetChartData: {
      state = action.payload
      return state;
    }

    default: {
      return state;
    }

  }

}

// ============================================================================================================

export const initialNodeOptions = {
  showName: true,
  showTitle: true,
  showPeopleWithNoTeams: false
};

export function nodeOptionsReducer(state = initialNodeOptions, action: AppActions): INodeOptions {
  switch (action.type) {
    default: {
      return state;
    }
  }

}

// ============================================================================================================

export const appReducer: ActionReducerMap<IAppState, any> = {
  domainData: domainDataReducer,
  actualData: actualDataReducer,
  chartData: chartDataReducer,
  nodeOptions: nodeOptionsReducer
}
