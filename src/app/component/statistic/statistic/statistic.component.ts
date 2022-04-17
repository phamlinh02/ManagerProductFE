import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import flatpickr from 'flatpickr';
import { FlatpickrOptions } from 'ng2-flatpickr';
import Russian from 'flatpickr/dist/l10n/ru.js';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Received} from "../../../model/Received";
import {ReceiveStatisticService} from "../../../services/receiveStatistic.service";
import {Delivery} from "../../../model/Delivery";
import {DeliveryStatisticService} from "../../../services/deliveryStatistic.service";
@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent {
  delivery!: Delivery[];


  form: FormGroup;
  startDate!: any;
  endDate!: any;
  date!: any[];

  priceData: any;
  quantityData : any;
  basicOptions: any;

  dataPrice: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  dataQuantity: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  month!: String[];
  monthData!: number[];


  constructor(
    private deliveryService: DeliveryStatisticService,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      start: new Date(Date.now()),
    });
  }

  startOptions: FlatpickrOptions = {
    mode: 'range',
    dateFormat: 'd-m-Y',
    defaultDate: new Date(Date.now()),
  };

  loadData() {
    this.deliveryService.getListDelivery().subscribe(
      data => this.delivery = data
    );
    this.deliveryService.getMonth().subscribe(
      month => this.month = month
    );


  }

  loadMonthToData(startDate: any, endDate: any) {
    let startDate1 ="", endDate1="";
    for (let i = 0; i < this.delivery.length; i++) {
      let month1: string = this.delivery[i].delivDate;
      let year1 : string = this.delivery[i].delivDate;

    let  month = month1.substr(3, 2);
     let year = year1.substr(6, 4);

      let yearDataStart ="", yearDataEnd ="";

      if (startDate) {
        startDate1 = startDate.substr(3, 2);
        yearDataStart = startDate.substr(6,4);
      }
      if (endDate) {
        yearDataEnd = endDate.substr(6,4);
        endDate1 = endDate.substr(3, 2);
      }

      this.monthData = [...new Set(this.month.map(x => +x))]

      if (endDate) {
        if (this.monthData.includes(+month) && ( +yearDataStart <= +year) && ( +yearDataEnd >= +year)) {
          if (this.dataPrice[+month - 1] != 0) {
            this.dataPrice[+month - 1] += this.delivery[+month - 1].sumPrice;
          } else {
            this.dataPrice[+month - 1] = this.delivery[+month - 1].sumPrice;
          }

          if (this.dataQuantity[+month - 1] != 0) {
            this.dataQuantity[+month - 1] += this.delivery[+month - 1].sumQuantity;
          } else {
            this.dataQuantity[+month - 1] = this.delivery[+month - 1].sumQuantity;
          }
        }

      } else {
        console.log("afbsgf")
        console.log(month);
        console.log(startDate1)
        console.log(year)
        console.log(yearDataStart)

        if (this.monthData.includes(+month) && ( +yearDataStart <= +year)) {
          if (this.dataPrice[+month - 1] != 0) {
            this.dataPrice[+month - 1] += this.delivery[+month - 1].sumPrice;
          } else {
            this.dataPrice[+month - 1] = this.delivery[+month - 1].sumPrice;
          }

          if (this.dataQuantity[+month - 1] != 0) {
            this.dataQuantity[+month - 1] += this.delivery[+month - 1].sumQuantity;
          } else {
            this.dataQuantity[+month - 1] = this.delivery[+month - 1].sumQuantity;
          }
        }

      }
    }
  }


  find() {
    this.date = this.form.value.start.toLocaleString().split(',');
    this.startDate = this.date[0];
    this.endDate = this.date[2];
    console.log(this.delivery)
    this.loadMonthToData(this.startDate, this.endDate);

    this.priceData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Quantity',
          data: this.dataQuantity,
          fill: false,
          backgroundColor: '#42A5F5',
          tension: 0.4,
        }
      ]
    };
    this.quantityData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Price',
          data: this.dataPrice,
          fill: false,
          backgroundColor: '#FFA726',
          tension: 0.4,
        }
      ]

    }
  }

  ngOnInit(): void {

    this.loadData();

  }
}
