import { Action } from '@ngrx/store';
import { ShoppingItemEntity } from '../reducers/list.reducer';

let currentFakeId = 1;

export const REMOVED_ITEM = '[shopping] removed item';
export class ItemRemoved implements Action {
  readonly type = REMOVED_ITEM;
  constructor(public payload: ShoppingItemEntity) { }
}


export const ADD_ITEM = '[shopping] add item';
export class ItemAdded implements Action {
  readonly type = ADD_ITEM;
  payload: ShoppingItemEntity;
  constructor(what: string) {
    this.payload = {
      id: 'TEMP' + (currentFakeId++).toString(),
      description: what
    };
  }
}


export type All =
  ItemAdded
  | ItemRemoved;


