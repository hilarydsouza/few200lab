import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-list/todo-data.service';
import { TodoSummary } from '../todo-list/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  summary$: Observable<TodoSummary>;


  constructor(private service: TodoDataService) { }

  ngOnInit() {
    this.summary$ = this.service.getSummary();

  }

}


