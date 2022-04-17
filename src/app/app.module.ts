import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/user/login/login.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductComponent } from './component/product/product.component';
import { DeliveryComponent } from './component/invoice-management/delivery/delivery.component';
import { ReceivedComponent } from './component/invoice-management/received/received.component';
import { StatisticComponent } from './component/statistic/statistic/statistic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { StatisticRevenueComponent } from './component/statistic/statistic-revenue/statistic-revenue.component';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radioButton';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog'
import {ConfirmDialogModule} from 'primeng/confirmdialog'
import {ToastModule} from 'primeng/toast'
import {ToolbarModule} from 'primeng/toolbar'
import {FileUploadModule} from 'primeng/fileupload'
import {  ChartModule } from 'primeng/chart';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    DeliveryComponent,
    ReceivedComponent,
    StatisticComponent,
    StatisticRevenueComponent,
  ],
  imports: [
    Ng2FlatpickrModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HighchartsChartModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    TableModule,
    DropdownModule,
    ConfirmDialogModule,
    DialogModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
