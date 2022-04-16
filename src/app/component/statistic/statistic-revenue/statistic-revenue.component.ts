import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Delivery } from 'src/app/model/Delivery';
import { Received } from 'src/app/model/Received';
import { DeliveryService } from 'src/app/services/delivery.service';
import { ReceiveService } from 'src/app/services/receive.service';

@Component({
  selector: 'app-statistic-revenue',
  templateUrl: './statistic-revenue.component.html',
  styleUrls: ['./statistic-revenue.component.scss'],
})
export class StatisticRevenueComponent implements OnInit {
  received!: Received[];
  delivery!: Delivery[];

  basicData: any;
  basicOptions: any;

  data: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  month!: number[];
  monthData!: number;

  constructor(
    private receiveService: ReceiveService,
    private deliveryService: DeliveryService
  ) {}

  loadData(){
    this.deliveryService.getListDelivery().subscribe(
      data => this.delivery = data
    )

  }

  ngOnInit(): void {

    this.loadData();
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
      datasets: [
        {
          label: 'Delivery',
          data: [65, 59, 80, 81, 56, 55, 40,34,23,76,34,54],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4,
        },
        {
          label: 'Received',
          data: [28, 48, 40, 19, 86, 27, 90.54,65,34,76,23],
          fill: false,
          borderColor: '#FFA726',
          tension: 0.4,
        },
      ],
    };
  }

  loadMonth(){
    this.delivery.forEach(
      e => this.month.push(+ e.delivDate)
    )

    console.log(this.month);
    
  }
}
