import {Component, Input} from '@angular/core';
import {Order} from "../../models/order.model";
import {CurrencyPipe, NgIf, NgStyle} from "@angular/common";
import {OrderStatusToColorPipe} from "../../pipes/order-status-to-color.pipe";

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    OrderStatusToColorPipe,
    NgStyle
  ],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss'
})
export class OrderCardComponent {
  @Input({required: true}) order: Order | undefined;
}
