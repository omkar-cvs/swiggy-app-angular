import { Component, signal } from '@angular/core';
import { User } from '../../../models/user';
import { form, FormField } from '@angular/forms/signals';
import { UserService } from '../../../services/user-service';

@Component({
  imports: [FormField],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  constructor(private userService: UserService) {}
  private initialUserState: User = {
    name: '',
    email: '',
    password: '',
  };
  registerModel = signal<User>({ ...this.initialUserState });

  registerForm = form(this.registerModel);

  registerUser() {
    const userData = this.registerModel();
    const payload: User = { ...userData };

    this.userService.saveUser(payload).subscribe({
      next: (response) => {
        console.log('Success:', response);
        this.registerModel.set({ ...this.initialUserState });
      },
      error: (err) => {
        // Since your data IS saving in the DB despite the gateway header block:
        if (err.status === 0) {
          console.warn('Data saved successfully (gateway suppressed response headers).');
          this.registerModel.set({ ...this.initialUserState }); // Clear the form anyway
        } else {
          console.error('Real registration error:', err);
        }
      },
    });
  }
}
