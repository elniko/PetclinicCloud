import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-list-visit',
  templateUrl: './list-visit.component.html',
  styleUrls: ['./list-visit.component.scss']
})
export class ListVisitComponent implements OnInit {

  constructor() { }
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'List all visits', icon: 'pi pi-fw pi-list'},
      {label: 'Create new visit', icon: 'pi pi-fw pi-plus'},
    ];
  }
}
