import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() 
  items: Item[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

}

