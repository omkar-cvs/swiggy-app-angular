import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwiggyService {
  //private readonly API_URL_SWIGGY = 'http://localhost:8999/swiggy';
  private readonly API_URL_SWIGGY = 'http://localhost:8999/swiggy/9u71245h';

  constructor(private http: HttpClient) {}
  /*
  welcomeSwiggy(): Observable<string> {
    return this.http.get(`${this.API_URL_SWIGGY}/home`, { responseType: 'text' });
  }
*/
  welcomeSwiggy(): Observable<string> {
    return this.http.get(`${this.API_URL_SWIGGY}`, { responseType: 'text' });
  }
}
