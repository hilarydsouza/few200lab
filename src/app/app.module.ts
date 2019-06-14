import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { NavComponent } from './components/nav/nav.component';
import { EntryComponent } from './components/todo-list/entry/entry.component';
import { ListComponent } from './components/todo-list/list/list.component';
import { TodoDataService } from './components/todo-list/todo-data.service';
import { CounterComponent } from './components/counter/counter.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';
import { ShoppingModule } from './features/shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DashboardComponent,
    TipCalculatorComponent,
    NavComponent,
    EntryComponent,
    ListComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects]),
    ShoppingModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
