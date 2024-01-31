import { Routes } from '@angular/router';
import {BasicLayoutComponent} from "./shared/basic-layout/basic-layout.component";

export const routes: Routes = [
  {
    path: "",
    component: BasicLayoutComponent,
    loadChildren: () => import("./orders/orders.routes").then(m => m.routes)
  },
  {
    path: "**",
    redirectTo: ""
  }
];
