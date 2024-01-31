import {Routes} from '@angular/router';
import {OrdersListComponent} from './components/orders-list/orders-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'orders'
  },
  {
    path: 'orders',
    component: OrdersListComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];
