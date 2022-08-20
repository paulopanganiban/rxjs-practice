import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
interface IPost {
  id: string
  title: string
  categoryId: string
  description: string
}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { };

  getPosts<T>() {
    return this.http
      .get<T>(
        `https://rxjs-posts-default-rtdb.firebaseio.com/posts.json`
      )
      .pipe(
        // convert the response to an array of Post objects
        tap(data => console.log(data)),
        map(posts => {
          const postArray = []
          for (const id in posts) {
            postArray.push({ ...posts[id], id  })
          }
          return postArray;
        })
      );
  }

  getJsonList() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
  }
  postJson(body: any) {
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', body)
  }

}
