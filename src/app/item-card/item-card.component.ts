import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  @Input() item?: Item;

  constructor() {}

  ngOnInit() {}
}
