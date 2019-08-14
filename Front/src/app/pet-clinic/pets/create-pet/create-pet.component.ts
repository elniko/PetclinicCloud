import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pet } from '../../model/Pet';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {

  constructor(private petsService: PetsService) { }

  pet: Pet = {
    id: null,
    name: null,
    owner: null,
    sendReminders: false,
    type: null,
    version:null,
    weight: null
  };

  petGroup:FormGroup;

  ngOnInit() {
    this.petGroup = new FormGroup({
      id: new FormControl(this.pet.id),
      name: new FormControl(this.pet.name, Validators.required),
      sendReminders: new FormControl(this.pet.sendReminders),
      type: new FormControl(this.pet.type),
      weight: new FormControl(this.pet.weight, Validators.required),
      version: new FormControl(this.pet.version),
      ownerId: new FormControl(this.pet.owner.id)
                                  });
  }

  onSubmit() {
    let pet = this.petGroup.value;
    pet.owner =
    this.petsService.addPet(pet);
  }


}
