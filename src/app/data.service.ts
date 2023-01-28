import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './models/item';
import { Order } from './models/order';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   URL: string = 'http://localhost:3000/items';

  items: Array<Item> = [];
  constructor(private http: HttpClient) { 
    this.getItems('').subscribe({
      next: (data) => {
        this.items = data;
        console.log(this.items);
      },
    });
  }
  
  
  getItems(searchText: string): Observable<Array<Item>>{
    if (searchText && searchText !== '' )
     return this.http.get<Array<Item>>(`${this.URL}?category=${searchText}`);
    else return this.http.get<Array<Item>>(`${this.URL}`);
  }

  addItem(item: Item){
    return this.http.post<Item>(this.URL, item);
  }

  getItem(id?: number) : Observable<Item> {
    return this.http.get<Item>(`${this.URL}/${id}`);
  }

  editItem(id?: number, item?: Item) {
    return this.http.put<Item>(`${this.URL}/${id}`,item);
  }

  submitOrder(orderData: Order) {
    return this.http.post('http://localhost:3000/orders', orderData);
  }

}
