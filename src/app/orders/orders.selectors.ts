import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrdersState } from "./reducers";
import {OrderStatusEnum} from "./enums/order-status.enum";

export const selectOrderState = createFeatureSelector<OrdersState>("orders");

export const allOrders = createSelector(
  selectOrderState,
  (ordersState) => ordersState.orders
);

export const filteredOrders = (statusFilter: OrderStatusEnum[]) => createSelector(
  selectOrderState,
  (ordersState) => ordersState.orders.filter(order => {
    return statusFilter.some(filterItem => order.status === filterItem);
  }
));

export const loading = createSelector(
  selectOrderState,
  (ordersState) => ordersState.loading
);
