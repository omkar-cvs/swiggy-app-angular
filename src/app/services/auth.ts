import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'jwt_token';

  constructor() {}

  /**
   * Save the JWT token to localStorage after a successful login
   */
  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  /**
   * Retrieve the stored JWT token
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Check if the user is authenticated (token exists)
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  /**
   * Clear the token on logout
   */
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
