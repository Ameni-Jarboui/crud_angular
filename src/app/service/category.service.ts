import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  postCategory(category: any): Observable<any> {
    return this.http.post(BASIC_URL + "/api/category", category);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(BASIC_URL + "/api/categories");
  }
  getCategoryById(id:number): Observable<any> {
    return this.http.get(BASIC_URL + "/api/category/" + id);
  }
  updateCategory(id:number, category: any): Observable<any> {
    return this.http.put(BASIC_URL + "/api/category/" + id, category);
  }

  deleteCategory(id:number): Observable<any> {
    return this.http.delete(BASIC_URL + "/api/category/" + id);
  }
}
