import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Order} from "../../models/order.model";
import {Store} from "@ngrx/store";
import {OrdersState} from "../../reducers";
import {ReactiveFormsModule} from "@angular/forms";
import {OrderFilterComponent} from "../order-filter/order-filter.component";
import {OrderStatusEnum} from "../../enums/order-status.enum";
import {filteredOrders, loading} from "../../orders.selectors";
import {AsyncPipe, CurrencyPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {OrdersActions} from "../../action-types";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {OrderCardComponent} from "../order-card/order-card.component";
import {OrderStatusToColorPipe} from "../../pipes/order-status-to-color.pipe";

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [ReactiveFormsModule, OrderFilterComponent, NgIf, AsyncPipe, NgForOf, MatCard, MatCardTitle, MatCardContent, CurrencyPipe, OrderCardComponent, NgStyle, NgClass, OrderStatusToColorPipe],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.scss'
})
export class OrdersListComponent implements OnInit, OnDestroy {
  private readonly INITIAL_FILTERS = [OrderStatusEnum.ACTIVE, OrderStatusEnum.PENDING_APPROVAL, OrderStatusEnum.WAITING_COMPENSATION];

  orders$: Observable<Order[]> = new Observable<Order[]>();
  loading$: Observable<boolean> = this.state.select(loading);
  filters$: BehaviorSubject<OrderStatusEnum[]> = new BehaviorSubject<OrderStatusEnum[]>(this.INITIAL_FILTERS);
  screenWidth$: BehaviorSubject<number> = new BehaviorSubject<number>(window.innerWidth || 1200);

  constructor(
    private state: Store<OrdersState>
  ) {
  }

  ngOnInit(): void {
    this.state.dispatch(OrdersActions.loadOrders());
    this.filters$.subscribe(filters => {
      this.orders$ = this.state.select(filteredOrders(this.filters$.value));
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth$.next(window.innerWidth);
  }

  filterData(newFilters: OrderStatusEnum[]) {
    this.filters$.next(newFilters);
  }

  ngOnDestroy(): void {
    this.filters$.unsubscribe();
  }

  protected readonly Number = Number;
}
