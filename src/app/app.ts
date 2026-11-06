import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwiggyComp } from './components/swiggy/swiggy-comp/swiggy-comp';
import { Register } from './components/user/register/register';
import { Login } from './components/user/login/login';
import { HeaderComponent } from './components/layout/header-component/header-component';
import { FooterComponent } from './components/layout/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SwiggyComp, Register, Login, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Swiggy-app');
}
