import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL: string = 'http://localhost:3000/items';
  constructor(private http: HttpClient) { }
  
  
  getItems(): Observable<Array<Item>>{
    return this.http.get<Array<Item>>(this.URL);
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

}
