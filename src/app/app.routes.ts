import { Routes } from '@angular/router';
import { Login } from './components/user/login/login';
import { SwiggyComp } from './components/swiggy/swiggy-comp/swiggy-comp';
import { HomeComponent } from './components/layout/home-component/home-component';
import { AboutComponent } from './components/layout/about-component/about-component';
import { ContactComponent } from './components/layout/contact-component/contact-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'swiggy', component: SwiggyComp }, // Route for your Swiggy component
];
