import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  // add new pages here: create a folder under src/app/<page>/ then map it below
  // { path: 'about-us', component: AboutUsComponent },

  { path: '**', redirectTo: 'home' }
];
