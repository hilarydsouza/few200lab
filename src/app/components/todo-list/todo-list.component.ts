import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoListItem } from './models';
import { TodoDataService } from './todo-data.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {


  items$: Observable<TodoListItem[]>;
  // items: TodoListItem[];
  // subscription: Subscription;
  constructor(private brad: TodoDataService) { }

  ngOnInit() {
    this.items$ = this.brad.getTodoList();

    // this.subscription = this.items$.subscribe(tdl => {
    //   console.log('Got a new todo list!', tdl);
    //   this.items = tdl;
    // });

  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  markComplete(item: TodoListItem) {
    // item.completed = true;
    // call the service...
  }

  add(what: string) {
    // this.items.unshift({ description: what, completed: false });
    // TODO: A Call tot he service to add this new Todo.
    this.brad.add(what);
  }

  clearCompleted() {
    // this.items = this.items.filter(item => item.completed === false);
  }
}
