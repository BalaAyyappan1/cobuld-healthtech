import { Routes } from '@angular/router';
import { Layout } from './components/Navigation/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then((m) => m.About),
      },
      {
        path: 'how-it-works',
        loadComponent: () =>
          import('./pages/howitworks/howitworks').then((m) => m.HowItWorks),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact').then((m) => m.Contact),
      },
      {
        path: 'privacy-policy',
        loadComponent: () =>
          import('./pages/privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy),
      },
      {
        path: 'terms-of-service',
        loadComponent: () =>
          import('./pages/terms-of-service/terms-of-service').then((m) => m.TermsOfService),
      },
      {
        path: 'cookies',
        loadComponent: () =>
          import('./pages/cookies/cookies').then((m) => m.Cookies),
      },
      {
        path: 'disclaimer',
        loadComponent: () =>
          import('./pages/disclaimer/disclaimer').then((m) => m.Disclaimer),
      },
    ],
  },
];
