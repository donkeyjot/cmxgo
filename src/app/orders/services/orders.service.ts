import {Injectable} from "@angular/core";
import {Order } from "../models/order.model";
import {Observable, of} from "rxjs";
import data from "../../../assets/data/data.json";

@Injectable({
  providedIn: "root"
})
export class OrdersService {

  getOrders(): Observable<Order[]> {
    return of(data.data);
  }
}
