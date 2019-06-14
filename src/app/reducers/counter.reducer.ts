import { Action } from '@ngrx/store';
import * as counterActions from '../actions/counter.actions';

export interface State {
  current: number;
  by: number;
}

const initialState: State = {
  current: 0,
  by: 1
};

export function reducer(state: State = initialState, action: counterActions.All): State {
  switch (action.type) {
    case counterActions.SET_COUNT_BY: {
      return {
        current: state.current,
        by: action.by
      };
    }
    case counterActions.RESET: {

      return initialState;
    }
    case counterActions.INCREMENT: {

      return {
        current: state.current + state.by,
        by: state.by
      };
    }
    case counterActions.DECREMENT: {

      return {
        current: state.current - state.by,
        by: state.by
      };
    }
    default: {
      return state;
    }
  }
}
