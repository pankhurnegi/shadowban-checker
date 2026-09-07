import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing.component').then((m) => m.LandingComponent),
  },
  {
    path: 'check',
    loadComponent: () => import('./features/instagram/check/check.component').then((m) => m.CheckComponent),
  },
  {
    path: 'result',
    loadComponent: () => import('./features/result/result.component').then((m) => m.ResultComponent),
  },
];
