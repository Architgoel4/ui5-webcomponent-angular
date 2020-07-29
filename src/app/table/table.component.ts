import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() todos;
  @Output() rowClick = new EventEmitter();
  columns = [{
    text: 'Products'
  }, {
    text: 'Dimensions'
  }, {
    text: 'Weights'
  }, {
    text: 'Price'
  }];

  constructor() { }

  ngOnInit() {
  }

  handleRowClick($event){
    this.rowClick.emit({
      row: $event
    });
  }

  handleEdit(event) {
    // this.editPressed.emit({
    //   id: event
    // });
  }

  handleDeleteItem(itemId) {
    // this.deletedItem.emit(itemId);
  }

  handleChangeSelection($event) {
    // this.changeSelection.emit({
    //   selected: $event.detail.selectedItems
    // });
  }
}
