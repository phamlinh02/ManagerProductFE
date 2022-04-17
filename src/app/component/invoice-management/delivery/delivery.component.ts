import { Component, OnInit } from '@angular/core';
import {DeliveryStatisticService} from "../../../services/deliveryStatistic.service";
import {Delivery} from "../../../model/Delivery";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  delivery !: Delivery[];

  constructor(
    private deliveryService : DeliveryStatisticService
  ) { }

  ngOnInit(): void {
    this.deliveryService.getListDelivery().subscribe(
      data => this.delivery = data
    )
  }

  editDeli(deli : Delivery){

  }

  deleteDeli(deli : Delivery){

  }
  openNew(){

  }
}
