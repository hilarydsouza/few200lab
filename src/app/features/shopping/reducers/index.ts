export const FEATURE_NAME = 'shoppingFeature';
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingListItem } from '../models';

export interface State {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};


// selectors

// 1. "Feature Selector"

export const selectFeature = createFeatureSelector<State>(FEATURE_NAME);

// 2. A selector for each "branch" of the features state.
export const selectListBranch = createSelector(selectFeature, f => f.list);

// export const { selectAll: selectAllShoppingItems } = fromList.adapter.getSelectors(selectListBranch);

export const selectAllShoppingItems = fromList.adapter.getSelectors(selectListBranch).selectAll;

// 3. The selectors for the actual components


export const selectShoppingListItems =
  createSelector(selectAllShoppingItems, items => items as ShoppingListItem[]);
