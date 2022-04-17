import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Delivery} from 'src/app/model/Delivery';
import {Received} from 'src/app/model/Received';
import {DeliveryStatisticService} from 'src/app/services/deliveryStatistic.service';
import {ReceiveStatisticService} from 'src/app/services/receiveStatistic.service';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FlatpickrOptions} from "ng2-flatpickr";

@Component({
  selector: 'app-statistic-revenue',
  templateUrl: './statistic-revenue.component.html',
  styleUrls: ['./statistic-revenue.component.scss'],
})
export class StatisticRevenueComponent implements OnInit {
  received!: Received[];


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
    private receiveService: ReceiveStatisticService,
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
    this.receiveService.getListReceived().subscribe(
      data => this.received = data
    );
    this.receiveService.getMonth().subscribe(
      month => this.month = month
    );


  }

  loadMonthToData(startDate: any, endDate: any) {
    let startDate1 ="", endDate1="";
    for (let i = 0; i < this.received.length; i++) {
      let month1: string = this.received[i].recDate;
      let year1 : string = this.received[i].recDate;

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
            this.dataPrice[+month - 1] += this.received[+month - 1].sumPrice;
          } else {
            this.dataPrice[+month - 1] = this.received[+month - 1].sumPrice;
          }

          if (this.dataQuantity[+month - 1] != 0) {
            this.dataQuantity[+month - 1] += this.received[+month - 1].sumQuantity;
          } else {
            this.dataQuantity[+month - 1] = this.received[+month - 1].sumQuantity;
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
            this.dataPrice[+month - 1] += this.received[+month - 1].sumPrice;
          } else {
            this.dataPrice[+month - 1] = this.received[+month - 1].sumPrice;
          }

          if (this.dataQuantity[+month - 1] != 0) {
            this.dataQuantity[+month - 1] += this.received[+month - 1].sumQuantity;
          } else {
            this.dataQuantity[+month - 1] = this.received[+month - 1].sumQuantity;
          }
        }

      }
    }
  }


  find() {
    this.date = this.form.value.start.toLocaleString().split(',');
    this.startDate = this.date[0];
    this.endDate = this.date[2];
    console.log(this.received)
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
