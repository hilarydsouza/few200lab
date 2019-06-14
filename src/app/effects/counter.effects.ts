import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as applicationActions from '../actions/app.actions';

@Injectable()
export class CounterEffects {


  @Effect() readCountBy$ = this.actions$
    .pipe(
      // filter(a => a.type === applicationActions.APP_START),
      ofType(applicationActions.APP_START),
      map(() => localStorage.getItem('count-by')),
      filter(ls => ls !== null),
      map(count => +count),
      map(count => new counterActions.CountBySet(count))
    )


  @Effect({
    dispatch: false
  }) logItAll$ = this.actions$
    .pipe(
      tap(a => console.log(`Effect got an action of type ${a.type}`))
    );

  @Effect({ dispatch: false }) saveCountBy$ = this.actions$
    .pipe(
      ofType(counterActions.SET_COUNT_BY), // Action
      map(a => a as counterActions.CountBySet), // CoutBySet
      map(a => a.by.toString()), // "3"
      tap(count => localStorage.setItem('count-by', count))
    );

  constructor(private actions$: Actions) { }
}
