import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { DataService } from '../data.service';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  items: Item[] = [];
  

  constructor(private dataServices: DataService) {}


  ngOnInit(): void {
    this.dataServices.getItems('').subscribe(data => {
      this.items = data;
    })
  }

  onItemAdded(item: Item) {
    this.items.push(item);
  }


  onSearchTextChanged(itemName: string) {
    this.dataServices.getItems('').subscribe({
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
    this.dataServices.getItems('').subscribe({
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

