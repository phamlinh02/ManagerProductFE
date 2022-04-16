import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticComponent } from './component/statistic/statistic/statistic.component';
import { ProductComponent } from './component/product/product.component';
import { LoginComponent } from './component/user/login/login.component';
import { UserComponent } from './component/user/user.component';
import { StatisticRevenueComponent } from './component/statistic/statistic-revenue/statistic-revenue.component';

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch: 'full'},
  {path :'home', component : ProductComponent},
  {path : 'login', component : LoginComponent},
  {path : 'user', component : UserComponent},
  {path :'product-statistics', component : StatisticComponent},
  {path :'revenue-statistics', component: StatisticRevenueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
