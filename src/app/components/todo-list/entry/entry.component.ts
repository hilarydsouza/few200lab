import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  add(item: HTMLInputElement) {
    this.itemAdded.emit(item.value);
    item.value = '';
    item.focus();
  }

}
