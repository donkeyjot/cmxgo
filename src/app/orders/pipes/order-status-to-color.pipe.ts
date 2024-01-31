import {Pipe, PipeTransform} from '@angular/core';
import {OrderStatusEnum} from "../enums/order-status.enum";

@Pipe({
  name: 'orderStatusToColor',
  standalone: true
})
export class OrderStatusToColorPipe implements PipeTransform {

  transform(orderStatus: string): string {
    switch (orderStatus) {
      case OrderStatusEnum.ACTIVE:
        return 'green';
      case OrderStatusEnum.WAITING_COMPENSATION:
        return 'orange';
      case OrderStatusEnum.PENDING_APPROVAL:
        return 'blue';
      default:
        return 'grey';
    }
  }

}
