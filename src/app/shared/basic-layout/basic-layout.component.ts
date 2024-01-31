import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {OrdersListComponent} from "../../orders/components/orders-list/orders-list.component";

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  imports: [RouterOutlet, HeaderComponent, OrdersListComponent],
  standalone: true,
  styleUrls: ['./basic-layout.component.scss']
})
export class BasicLayoutComponent {
}
