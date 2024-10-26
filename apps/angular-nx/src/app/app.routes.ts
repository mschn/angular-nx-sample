import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'customers',
    title: 'Customers',
    loadComponent: () =>
      import('@angular-nx/customers').then((m) => m.CustomersComponent),
  },
  {
    path: 'products',
    title: 'Products',
    loadComponent: () =>
      import('@angular-nx/products').then((m) => m.ProductsComponent),
  },
];
