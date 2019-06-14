import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { State, selectCurrentCount, selectAtTheStart, selectCountingBy, selectCantDecrement } from '../../reducers';
import { Observable } from 'rxjs';
import * as counterActions from '../../actions/counter.actions';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  cantDecrement$: Observable<boolean>;
  by$: Observable<number>;
  atTheStart$: Observable<boolean>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCurrentCount);
    this.by$ = this.store.select(selectCountingBy);
    this.cantDecrement$ = this.store.select(selectCantDecrement);
    this.atTheStart$ = this.store.select(selectAtTheStart);
  }

  increment() {

    // this.count = this.count + 1;
    this.store.dispatch(new counterActions.CountIncremented());
  }

  decrement() {
    this.store.dispatch(new counterActions.CountDecremented());
  }
  reset() {
    this.store.dispatch(new counterActions.CountReset());
  }

  setCountBy(what: number) {
    this.store.dispatch(new counterActions.CountBySet(what));
    // localStorage.setItem('counting-by', what.toString());
  }
}
