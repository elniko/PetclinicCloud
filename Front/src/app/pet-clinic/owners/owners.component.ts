import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'List all owners', icon: 'pi pi-fw pi-list', routerLink : "."},
      {label: 'Create new owner', icon: 'pi pi-fw pi-plus', routerLink : "new"},
    ];
  }
}
