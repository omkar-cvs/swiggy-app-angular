import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { UserService } from '../../../services/user-service';
import { AuthRequest } from '../../../models/auth-request';
import { AuthService } from '../../../services/auth';
import { Router } from '@angular/router';

@Component({
  imports: [FormField],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) {}

  loginModel = signal<AuthRequest>({
    username: '',
    password: '',
  });

  loginForm = form(this.loginModel);

  loginUser() {
    // Explicitly unwrap the signal value
    const payload = this.loginModel();
    //   console.log('Triggering login request with:', payload);

    this.userService.getToken(payload).subscribe({
      next: (response) => {
        //  console.log('SUCCESS! Token received:', response);
        if (response && response.token) {
          console.log('JWT Token String:', response.token);
          // Assuming response looks like { token: "ey..." }
          this.authService.saveToken(response.token);
          console.log('Token successfully stored!');

          // 3. Redirect to the Swiggy component route
          this.router.navigate(['/swiggy']);
        }
      },
      error: (err) => {
        console.error('ERROR OCCURRED during login:', err);
      },
      complete: () => {
        console.log('Request stream completed.');
      },
    });
  }
}
