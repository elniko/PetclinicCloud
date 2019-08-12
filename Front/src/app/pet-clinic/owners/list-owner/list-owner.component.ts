import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.scss']
})
export class ListOwnerComponent implements OnInit {

  constructor() { }
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'List all owners', icon: 'pi pi-fw pi-list'},
      {label: 'Create new owner', icon: 'pi pi-fw pi-plus'},
    ];
  }
}
