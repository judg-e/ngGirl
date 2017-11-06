import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p>
      {{ todoItem.title }}
    </p>
    <button (click)="removeItem()">
      remove
    </button>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }
  @Input() todoItem: any;
  @Output() remove: EventEmitter <any> = new EventEmitter();
  ngOnInit() {
  }
  removeItem() {
    this.remove.emit(this.todoItem);
  }
}
