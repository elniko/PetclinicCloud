import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../../model/Owner';
import { OwnersService } from '../owners.service';

@Component({
             selector: 'app-create-owner',
             templateUrl: './create-owner.component.html',
             styleUrls: ['./create-owner.component.scss']
           })
export class CreateOwnerComponent implements OnInit {

  constructor(
    private ownersService: OwnersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  data: Owner = {
    id: null,
    firstName: null,
    lastName: null,
    address: null,
    birthDate: null,
    city: null,
    email: null,
    homepage: null,
    telephone: null
  };

  ownerGroup: FormGroup;

  ngOnInit() {

    this.route.data.subscribe(data => Object.assign(this.data, data.owner) );
    this.ownerGroup = new FormGroup(
      {
        id: new FormControl(this.data.id),
        firstName: new FormControl(this.data.firstName, Validators.required),
        lastName: new FormControl(this.data.lastName, Validators.required),
        address: new FormControl(this.data.address),
        birthDate: new FormControl(this.data.birthDate),
        city: new FormControl(this.data.city),
        email: new FormControl(this.data.email, [Validators.required, Validators.email]),
        homepage: new FormControl(this.data.homepage),
        telephone: new FormControl(this.data.telephone, Validators.pattern("[0-9]*")),
      });



  }

  onSubmit() {
    if(this.ownerGroup.valid) {
      this.ownersService.addOwner(this.ownerGroup.value);
      this.router.navigate(['/owners']);
    }

  }

}
