import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticRevenueComponent } from './statistic-revenue.component';

describe('StatisticRevenueComponent', () => {
  let component: StatisticRevenueComponent;
  let fixture: ComponentFixture<StatisticRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticRevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
