import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { delay, filter } from 'rxjs/operators';
import { Event  } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  proStatic = false;
  dashboard = true;
  revStatic = false;
  managerUser = false;
  profileUser = false;
  aboutUser = false;

  public url: string = '';

  constructor(private observer: BreakpointObserver, private router: Router, private activatedRoute: ActivatedRoute) {
    
  }
  

  ngOnInit() {
    this.router.events.subscribe((event:Event) => {
      if(event instanceof NavigationEnd ){
        this.url = event.url;
      }
    });
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
}
