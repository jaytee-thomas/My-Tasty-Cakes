import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
  item: Item = {};
  constructor(private dataService: DataService) {}

  add() {
    if (this.item.name)
      this.dataService.addItem(this.item).subscribe((data) => {
        alert('Item added successfully');
        this.item = {};
      });
  }
}
