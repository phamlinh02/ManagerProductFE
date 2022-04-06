import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  proStatic = false;
  dashboard = true;
  revStatic = false;
  managerUser = false;
  profileUser = false;
  aboutUser = false;


  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      console.log(this.sidenav.mode);
      
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  proSta(){
    this.proStatic = true;
    this.aboutUser = false;
    this.dashboard = false;
    this.managerUser = false;
    this.profileUser = false;
    this.revStatic = false;
  }

  dash(){
    this.dashboard = true;
    this.proStatic = false;
    this.aboutUser = false;
    this.managerUser = false;
    this.profileUser = false;
    this.revStatic = false;
  }

  revSta(){
    this.revStatic = true;
    this.dashboard = false;
    this.proStatic = false;
    this.aboutUser = false;
    this.managerUser = false;
    this.profileUser = false;
  }
  // managerPro(){
  //   this.managerProduct = true;
  // }
  manaUser(){
    this.managerUser = true;
    this.dashboard = false;
    this.proStatic = false;
    this.aboutUser = false;
    this.profileUser = false;
    this.revStatic = false;
  }
  profile(){
    this.profileUser = true;
    this.dashboard = false;
    this.proStatic = false;
    this.aboutUser = false;
    this.managerUser = false;
    this.revStatic = false;
  }
  about(){
    this.aboutUser = true;
    this.dashboard = false;
    this.proStatic = false;
    this.managerUser = false;
    this.profileUser = false;
    this.revStatic = false;
  }
}
