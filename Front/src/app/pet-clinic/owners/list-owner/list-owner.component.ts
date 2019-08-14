import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { mergeMap } from 'rxjs/operators';
import { Owner } from '../../model/Owner';
import { OwnersService } from '../owners.service';

@Component({
             selector: 'app-list-owner',
             templateUrl: './list-owner.component.html',
             styleUrls: ['./list-owner.component.scss']
           })
export class ListOwnerComponent implements OnInit {

  constructor(private ownersService: OwnersService) {
  }

  owners: Owner[] = [];

  ngOnInit() {


    this.ownersService.getOwners()
        .subscribe(data => {
          console.log(data);
          this.owners = data;
        });

  }

  remove(id: number) {
    this.ownersService.removeOwnerById(id)
        .pipe(mergeMap(resp => this.ownersService.getOwners()))
        .subscribe(data => {
          console.log(data);
          this.owners = data;
        })


  }


}
