import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
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
  // What do you have
  // What do you want
  // When do you want it
  // Posts and Categories
  // We need to get the categoryId of the post
  // On user click

  getPostsWithCategory() {
    return this.getPosts().pipe(
      // get posts using mergeMap
      // then get categoryId
      mergeMap((posts) => this.getCategories()
        .pipe(
          // get categories here using map
          map((categories) => {
            return posts.map(post => {
                const categoryName = categories.find(category => category.id === post.categoryId)?.title
                const data = {
                  ...post,
                  categoryName
                }
                return data
            })

          })
        )
      )
    )
  }


  getCategories() {
    return this.http.get<{[id: string]: {id: string}}>(
      `https://rxjs-posts-default-rtdb.firebaseio.com/categories.json`
    ).pipe(
      map((categories) => {
        const categoriesData: {id: string, title?: string}[] = [];
        for (const id in categories) {
          categoriesData.push({ ...categories[id], id });
        }
        return categoriesData;
      })
    );
  }
  getPosts() {
    return this.http
      .get<{[categoryId: string]: {categoryId: string}}>(
        `https://rxjs-posts-default-rtdb.firebaseio.com/posts.json`
      )
      .pipe(
        // convert the response to an array of Post objects
        tap(data => console.log(data)),
        map(posts => {
          const postArray = []
          for (const id in posts) {
            postArray.push({ ...posts[id], id })
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
