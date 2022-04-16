import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import flatpickr from 'flatpickr';
import { FlatpickrOptions } from 'ng2-flatpickr';
import Russian from 'flatpickr/dist/l10n/ru.js';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent {
  @ViewChild('startPicker') pickerStart: any;

  highcharts = Highcharts;
  form: FormGroup;
  startDate!: any;
  endDate!: any;
  date!: any[];

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      start: new Date(Date.now()),
    });
  }

  startOptions: FlatpickrOptions = {
    mode: 'range',
    dateFormat: 'd-m-Y',
    defaultDate: new Date(Date.now()),
  };

  ngAfterViewInit() {
    console.log(this.pickerStart);
  }

  find() {
    this.date = this.form.value.start.toLocaleString().split(',');
    this.startDate = this.date[0];
    this.endDate = this.date[2];
    console.log(this.startDate);
    console.log(this.endDate);
  }

  ngOnInit() {}

  chartOptions: Highcharts.Options = {
    title: {
      text: 'Product Statistic',
    },
    xAxis: {
      title: {
        text: 'Product',
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Temprature',
      },
    },
    series: [
      {
        data: [
          7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 24.4, 19.3, 16.0, 18.4, 17.9,
        ],
        type: 'spline',
      },
    ],
  };
}
