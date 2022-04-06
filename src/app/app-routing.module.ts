import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { StatisticComponent } from './component/home/statistic/statistic.component';
import { ProductComponent } from './component/product/product.component';
import { LoginComponent } from './component/user/login/login.component';

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch: 'full'},
  {path :'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'home/Product-statistic', component : StatisticComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
