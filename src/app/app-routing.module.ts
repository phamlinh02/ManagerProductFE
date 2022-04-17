import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatisticComponent} from './component/statistic/statistic/statistic.component';
import {ProductComponent} from './component/product/product.component';
import {LoginComponent} from './component/user/login/login.component';
import {UserComponent} from './component/user/user.component';
import {StatisticRevenueComponent} from './component/statistic/statistic-revenue/statistic-revenue.component';
import {DeliveryComponent} from "./component/invoice-management/delivery/delivery.component";
import {ReceivedComponent} from "./component/invoice-management/received/received.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'home', component: ProductComponent},
  {
    path: 'login', component: LoginComponent},
  {
    path: 'user', component: UserComponent},
  {
    path: 'product-statistics', component: StatisticComponent},
  {
    path: 'revenue-statistics', component: StatisticRevenueComponent},
  {
    path: 'delivery', component: DeliveryComponent},
  {
    path: 'received', component: ReceivedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
