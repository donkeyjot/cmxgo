import { createReducer, on } from "@ngrx/store";
import { OrdersActions } from "../action-types";
import { Order } from "../models/order.model";

export interface ErrorState {
  code: number;
  message?: string;
}

export interface OrdersState {
  orders: Order[];
  error: ErrorState | null;
  loading: boolean;
}

export const initialOrdersState: OrdersState = {
  orders: [],
  error: null,
  loading: false
};

export const ordersReducer = createReducer(
  initialOrdersState,

  on(OrdersActions.loadOrders, (state, action) => {
    return {
      ...state,
      loading: true
    };
  }),

  on(OrdersActions.ordersLoaded, (state, action) => {
    return {
      ...state,
      orders: action.orders,
      loading: false
    };
  }),

  on(OrdersActions.loadError, (state, action) => {
    return {
      ...state,
      loading: false
    };
  })
);
