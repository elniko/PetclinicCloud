import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'List all visits', icon: 'pi pi-fw pi-list', routerLink : "."},
      {label: 'Create new visit', icon: 'pi pi-fw pi-plus', routerLink : "new"},
    ];
  }

}
