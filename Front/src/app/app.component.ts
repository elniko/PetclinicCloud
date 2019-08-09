import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{


  router :Router;
  constructor(router: Router){
    this.router = router;
  }

  title = 'front';
  activeItem: MenuItem;
  items: MenuItem[];

  ngOnInit():void {

    this.items = [
      {label: 'Visits', icon: 'fa fa-fw fa-bar-chart', routerLink: "visits"},
      {label: 'Pets', icon: 'fa fa-fw fa-calendar', routerLink: "pets"},
      {label: 'Vets', icon: 'fa fa-fw fa-book', routerLink: "vets"},
      {label: 'Owners', icon: 'fa fa-fw fa-support',routerLink: "owners"},
    ];

    this.setActiveItem(this.router.url);
  }

  activateMenu(){
    this.activeItem = this.items['activeItem'];
  }

  setActiveItem(url: string){
    this.activeItem = this.items.find(item => url === '/'+ item.routerLink);
  }

}
