import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit{
  itemName: string = '';
  
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void{
  }
  searchItem(){
    this.searchTextChanged.emit(this.itemName);
  }

  clearSearch(){
    this.itemName = '';
    this.searchTextChanged.emit(this.itemName);
  }

  
}
