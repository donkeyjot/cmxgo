import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {OrderStatusEnum} from "../../enums/order-status.enum";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './order-filter.component.html',
  styleUrl: './order-filter.component.scss'
})
export class OrderFilterComponent implements OnInit, OnDestroy {
  public sub: Subscription;

  @Output() filters: EventEmitter<OrderStatusEnum[]> = new EventEmitter<OrderStatusEnum[]>();

  filtersGroup = new FormGroup({
      active: new FormControl(true),
      pendingApproval: new FormControl(true),
      waitingCompensation: new FormControl(true)
    }
  )

  constructor() {
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    this.sub.add(this.filtersGroup.valueChanges.subscribe(values => {
      const newFilterArray = [
        values.active ? OrderStatusEnum.ACTIVE : null,
        values.pendingApproval ? OrderStatusEnum.PENDING_APPROVAL : null,
        values.waitingCompensation ? OrderStatusEnum.WAITING_COMPENSATION : null];
      this.filters.emit(newFilterArray.filter(this.notEmpty));
    }))
  }

  notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
