import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/item';
import { DataService } from '../data.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }


  item: Item = { price: "", name: "", category: ""};
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.dataService.getItem(+id).subscribe(data => {
        this.item = data;
      })
    });
  }

  editItem() {
    this.dataService.editItem(this.item?.id, this.item).subscribe(data => {
      this.item = data;
      
    })
  }

}
