import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { };
  getJsonList() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
  }
  postJson(body: any) {
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', body)
  }
}
