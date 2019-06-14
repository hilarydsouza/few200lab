import { TodoListItem, TodoSummary } from './models';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
export class TodoDataService {

  private data: TodoListItem[] = [
    { description: 'Fix Front Door', completed: false },
    { description: 'Change bathroom lightbulbs', completed: false },
    { description: 'Kill Thistles', completed: true }
  ];

  private todoListSubject = new BehaviorSubject<TodoListItem[]>(this.data);

  getTodoList(): Observable<TodoListItem[]> {
    const observable = this.todoListSubject.asObservable();


    return observable;
  }


  add(what: string) {
    // really, call the api... but we are going to fake it.
    this.data = [{ description: what, completed: false }, ...this.data];
    this.todoListSubject.next(this.data);
  }

  getSummary(): Observable<TodoSummary> {
    return this.todoListSubject.pipe(
      map(list => {
        return {
          total: list.length,
          completed: list.filter(f => f.completed).length,
          incomplete: list.filter(f => !f.completed).length
        } as TodoSummary;
      })
    );
  }

}
