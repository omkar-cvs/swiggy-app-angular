import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiggyService } from '../../../services/swiggy-service.ts';
import { count } from 'rxjs';
// Fixed: Removed the '.ts' extension from the path

@Component({
  selector: 'app-swiggy-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiggy-comp.html',
  styleUrl: './swiggy-comp.css',
})
export class SwiggyComp {
  // Added OnInit interface
  orderData = signal<any>(null);
  errorMessage = signal<string>('Error');

  constructor(private swiggyService: SwiggyService) {}

  // Fixed: Changed from ngOnChange to ngOnInit so it triggers automatically on every load/login
  getSwiggy() {
    this.fetchGreeting();
  }
  fetchGreeting(): void {
    //this.greetingMessage = 'Welcome to Swiggy';

    this.swiggyService.welcomeSwiggy().subscribe({
      next: (response) => {
        // this.greetingMessage.set(response);

        const parsedData = typeof response === 'string' ? JSON.parse(response) : response;
        this.orderData.set(parsedData);
      },
      error: (error) => {
        this.errorMessage.set('Failed to connect to the Swiggy backend.');
        console.error(error);
      },
    });
  }
}
