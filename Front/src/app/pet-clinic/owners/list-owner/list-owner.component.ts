import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Owner } from '../../model/Owner';
import { OwnersService } from '../owners.service';

@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.scss']
})
export class ListOwnerComponent implements OnInit {

  constructor(private ownersService: OwnersService) { }
  items: MenuItem[];

  owners: Owner[] = [

  ];

  ngOnInit() {
    this.items = [
      {label: 'List all owners', icon: 'pi pi-fw pi-list'},
      {label: 'Create new owner', icon: 'pi pi-fw pi-plus'},
    ];

    this.owners = this.ownersService.getOwners();
    console.log(this.owners);
  }

  remove(id: number) {
    const index = this.owners.findIndex(owner=> owner.id === id);
    this.owners.splice(index,1);
  }


}
