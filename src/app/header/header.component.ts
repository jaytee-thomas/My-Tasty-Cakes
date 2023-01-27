import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Item } from '../models/item';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Input()

export class HeaderComponent implements OnInit {
  filterBy: string = 'all';
  items: Item[] = [];

  constructor(private dataServices: DataService) {}

  updateFilter(filter: string) {
    this.filterBy = filter;
  }

  ngOnInit(): void {
    this.dataServices.getItems().subscribe(data => {
      this.items = data;
    })
  }

  onItemAdded(item: Item) {
    this.items.push(item);
  } 

  

  onSearchTextChanged(itemName: string) {
    this.dataServices.getItems().subscribe({
      next: data => {
        if (itemName || itemName !== '') {
          this.items = data.filter(item => item.name?.includes(itemName));
        }
        else
          this.items = data;
      }
    })
  }

  filterItem(category: string) {
    this.dataServices.getItems().subscribe({
      next: data => {
        if (category || category !== '') {
          this.items = data.filter(item => item.name?.includes(category));
        }
        else
          this.items = data;
      }
    })
  }
  
}
