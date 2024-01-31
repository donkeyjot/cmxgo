import { createAction, props } from "@ngrx/store";
import { ErrorState } from "./reducers";
import { Order } from "./models/order.model";

export const loadOrders = createAction(
  '[Orders Page] Load Orders Start'
);

export const ordersLoaded = createAction(
  '[Orders Effects] Orders Load Success',
  props<{ orders: Order[] }>()
);

export const loadError = createAction(
  '[API] Load error',
  props<{ error: ErrorState }>()
);


