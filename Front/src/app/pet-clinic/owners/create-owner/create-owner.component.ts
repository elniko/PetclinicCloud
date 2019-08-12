import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Owner } from '../../model/Owner';

@Component({
             selector: 'app-create-owner',
             templateUrl: './create-owner.component.html',
             styleUrls: ['./create-owner.component.scss']
           })
export class CreateOwnerComponent implements OnInit {

  constructor() {
  }

  @Input()
  data: Owner = {
    firstName: null,
    lastName: null,
    address: null,
    birthDate: null,
    city: null,
    email: null,
    homePage: null,
    telephone: null
  };

  ownerGroup: FormGroup;

  ngOnInit() {
    this.ownerGroup = new FormGroup(
      {
        firstName: new FormControl(this.data.firstName, Validators.required),
        lastName: new FormControl(this.data.lastName, Validators.required),
        address: new FormControl(this.data.address),
        birthDate: new FormControl(this.data.birthDate),
        city: new FormControl(this.data.city),
        email: new FormControl(this.data.email, [Validators.required, Validators.email]),
        homepage: new FormControl(this.data.homePage),
        telephone: new FormControl(this.data.telephone, Validators.pattern("[0-9]*")),
      });
  }

  onSubmit() {
     console.log(this.ownerGroup.value);
  }

}
