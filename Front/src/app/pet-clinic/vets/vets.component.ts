import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.scss']
})
export class VetsComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'List all vets', icon: 'pi pi-fw pi-list', routerLink : "."},
      {label: 'Create new vet', icon: 'pi pi-fw pi-plus', routerLink : "new"},
    ];
  }
}
