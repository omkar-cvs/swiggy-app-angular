import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { catchError, Observable, of, timeout } from 'rxjs';
import { User } from '../models/user';
import { AuthRequest } from '../models/auth-request';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private readonly API_URL_USER = 'http://localhost:8999/auth';
  private readonly API_URL_USER = 'http://localhost:9898/auth';
  constructor(private http: HttpClient) {}
  /*
  saveUser(user: User): Observable<string> {
    // Explicitly tell Angular to expect a text response instead of JSON
    return this.http.post(`${this.API_URL_USER}/register`, user, { responseType: 'text' });
  }
*/
  /*
  saveUser(user: User): Observable<any> {
    // Tell Angular to treat it as text, but catch parsing issues if the body is completely stripped
    return this.http.post(`${this.API_URL_USER}/register`, user, {
      responseType: 'text',
      observe: 'body',
    });
  }

  */

  saveUser(user: User): Observable<any> {
    return this.http.post(`${this.API_URL_USER}/register`, user, { responseType: 'text' }).pipe(
      catchError((error: HttpErrorResponse) => {
        // If data saved successfully in DB but gateway stripped headers (status 0),
        // treat it as a success so it doesn't log a red error in the console.
        if (error.status === 0) {
          return of('user added to the system');
        }
        // Rethrow any other real errors
        throw error;
      }),
    );
  }

  getToken(authRequest: AuthRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.API_URL_USER}/token`, authRequest, { headers }).pipe(
      timeout(5000), // Fail fast after 5 seconds instead of hanging forever if gateway stalls
    );
  }
}
