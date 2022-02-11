import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient,private titleService:Title) { }

  apiUrl = 'http://localhost:3000';

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  getGuitars(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  getGuitar(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl + '/guitar'}/${id}`);
  }
  getDesc(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl + '/guitar'}/${id}/desc`);
  }
  getReviews(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl + '/guitar'}/${id}/reviews`);
  }
  createReview(id:any,data:any):Observable<any>{
    return this.http.post(`${this.apiUrl + '/guitar'}/${id}/reviews`,data);
  }
  createGuitar(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl + '/add-guitar'}`,data)
  }
  getEditGuitar(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl + '/guitar/edit'}/${id}`);
  }
  updateGuitar(id:any,data:any):Observable<any>{
    return this.http.put(`${this.apiUrl + '/guitar/edit'}/${id}`,data)
  }
}
