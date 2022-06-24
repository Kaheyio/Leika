import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getTypeRequest(url: any) {
    return this.http.get(`${this.baseUrl}${url}`).pipe(map(res => {
      return res;
    }));
  };

  postTypeRequest(url: any, payload: any) {
    return this.http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  };
  
  putTypeRequest(url: any, payload: any) {
    return this.http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  };

}
