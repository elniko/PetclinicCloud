import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../../model/Owner';
import { Vet } from '../../model/Vet';
import { VetsService } from '../vets.service';

@Component({
  selector: 'app-create-vet',
  templateUrl: './create-vet.component.html',
  styleUrls: ['./create-vet.component.scss']
})
export class CreateVetComponent implements OnInit {


  constructor( private vetsService: VetsService,
               private router: Router,
               private route: ActivatedRoute) { }


  data: Vet = {
    id: null,
    firstName: null,
    lastName: null,
    address: null,
    birthDay: null,
    city: null,
    email: null,
    homePage: null,
    telephone: null,
    employedSince: null,
    specialty: null,
    version: null
  };

  vetGroup: FormGroup;

  specialities = [
    {label:'Cardiology', value:'Cardiology'},
    {label:'Nutrition', value:'Nutrition'},
    {label:'Dentistry', value:'Dentistry'}
  ];

  ngOnInit() {

    this.route.data.subscribe(data => {
      if(!data.vet) return;
      let vet: Vet = data.vet;
      vet.birthDay = new Date(vet.birthDay);
      vet.employedSince = new Date(vet.employedSince);
      Object.assign(this.data, vet);
    });

    this.vetGroup = new FormGroup(
      {
        id: new FormControl(this.data.id),
        firstName: new FormControl(this.data.firstName, Validators.required),
        lastName: new FormControl(this.data.lastName, Validators.required),
        address: new FormControl(this.data.address),
        birthDay: new FormControl(this.data.birthDay, Validators.required),
        city: new FormControl(this.data.city),
        version: new FormControl(this.data.version),
        email: new FormControl(this.data.email, [Validators.required, Validators.email]),
        homePage: new FormControl(this.data.homePage),
        telephone: new FormControl(this.data.telephone, Validators.pattern("[0-9]*")),
        employedSince: new FormControl(this.data.employedSince, Validators.required),
        specialty: new FormControl(this.data.specialty),
      });

  }

  onSubmit() {
    if(this.vetGroup.valid) {
      this.vetsService
          .addVet(this.vetGroup.value)
          .subscribe(resp => {
            this.router.navigate(['/vets']);
          });
    }

  }


}
