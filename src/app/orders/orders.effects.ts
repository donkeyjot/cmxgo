import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { OrdersActions } from "./action-types";
import { catchError, debounceTime, map, of, switchMap, tap } from "rxjs";
import { ErrorState } from "./reducers";
import {OrdersService} from "./services/orders.service";

@Injectable()
export class OrdersEffects {

  getOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.loadOrders),
      switchMap(() => {
        return this.ordersService.getOrders();
      }),
      map(orders => OrdersActions.ordersLoaded({ orders })),
      catchError(err => {
        const error: ErrorState = {
          code: err.code
        };
        return of(OrdersActions.loadError({ error }));
      })
    ));

  constructor(
    private actions$: Actions,
    private ordersService: OrdersService
  ) {
  }

}
