
import * as listActions from '../actions/list.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
export interface ShoppingItemEntity {
  id: string;
  description: string;
}

export interface State extends EntityState<ShoppingItemEntity> {

}
export const adapter = createEntityAdapter<ShoppingItemEntity>();

const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      description: 'Taco Shells'
    },
    2: {
      id: '2',
      description: 'Slip-And-Slide'
    }
  }
};

export function reducer(state: State = initialState, action: listActions.All): State {
  switch (action.type) {
    case listActions.REMOVED_ITEM: {
      return adapter.removeOne(action.payload.id, state);
    }
    case listActions.ADD_ITEM: {
      return adapter.addOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
