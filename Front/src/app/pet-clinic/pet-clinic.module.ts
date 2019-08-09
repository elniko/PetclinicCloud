import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets/pets.component';
import { VisitsComponent } from './visits/visits.component';
import { OwnersComponent } from './owners/owners.component';
import { VetsComponent } from './vets/vets.component';



@NgModule({
  declarations: [PetsComponent, VisitsComponent, OwnersComponent, VetsComponent],
  imports: [
    CommonModule
  ]
})
export class PetClinicModule { }
