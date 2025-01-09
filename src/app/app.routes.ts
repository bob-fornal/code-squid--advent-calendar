import { Routes } from '@angular/router';
import { RootComponent } from './pages/root/root.component';

export const routes: Routes = [
  { path: 'root', component: RootComponent },
  { path: '', redirectTo: 'root', pathMatch: 'full' },
];
