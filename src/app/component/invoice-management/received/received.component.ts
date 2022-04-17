import { Component, OnInit } from '@angular/core';
import {ReceiveStatisticService} from "../../../services/receiveStatistic.service";
import {Received} from "../../../model/Received";

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})
export class ReceivedComponent implements OnInit {

  received !: Received[]

  constructor(
    private receivedService : ReceiveStatisticService

  ) { }

  ngOnInit(): void {
    this.receivedService.getListReceived().subscribe(
      data => this.received = data
    )

  }
  editRec(rec : Received){
    console.log(this.received)
  }

  openNew(){

  }

}
