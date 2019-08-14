import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'List all pets', icon: 'pi pi-fw pi-list', routerLink : "."},
      {label: 'Create new pet', icon: 'pi pi-fw pi-plus', routerLink : "new"},
    ];
  }
}
