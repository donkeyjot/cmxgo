import {ApplicationConfig, DEFAULT_CURRENCY_CODE, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {ordersReducer} from "./orders/reducers";
import {OrdersEffects} from "./orders/orders.effects";
import {provideStoreDevtools} from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({orders: ordersReducer}),
    provideEffects([OrdersEffects]),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    {provide: DEFAULT_CURRENCY_CODE, useValue: ''}
  ]
};
