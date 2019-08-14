import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOwnerComponent } from './pet-clinic/owners/create-owner/create-owner.component';
import { ListOwnerComponent } from './pet-clinic/owners/list-owner/list-owner.component';
import { OwnersComponent } from './pet-clinic/owners/owners.component';
import { OwnersResolver } from './pet-clinic/owners/owners.resolver';
import { CreatePetComponent } from './pet-clinic/pets/create-pet/create-pet.component';
import { ListPetComponent } from './pet-clinic/pets/list-pet/list-pet.component';
import {PetsComponent} from "./pet-clinic/pets/pets.component";
import { CreateVetComponent } from './pet-clinic/vets/create-vet/create-vet.component';
import { ListVetComponent } from './pet-clinic/vets/list-vet/list-vet.component';
import {VetsComponent} from "./pet-clinic/vets/vets.component";
import { VetsResolver } from './pet-clinic/vets/vets.resolver';
import { ListVisitComponent } from './pet-clinic/visits/list-visit/list-visit.component';
import { VisitsComponent } from './pet-clinic/visits/visits.component';


const routes: Routes = [
  {
    path: 'pets',
    component: PetsComponent,
    children: [
      {
        path: '',
        component: ListPetComponent
      }  ,
      {
        path: 'new',
        component: CreatePetComponent
      }
    ]
  },
  {
    path: 'vets',
    component: VetsComponent,
    children: [
      {
        path: '',
        component: ListVetComponent
      },
      {
        path: 'new',
        component: CreateVetComponent
      },
      {
        path: 'edit/:id',
        component: CreateVetComponent,
        resolve: {
          vet: VetsResolver
        }
      }
    ]
  },
  {
    path: 'visits',
    component: VisitsComponent,
    children: [
      {
        path: '',
        component: ListVisitComponent
      }
    ]

  },
  { path: 'owners',
    component: OwnersComponent ,
    children: [
      {
        path: 'new',
        component: CreateOwnerComponent,
      },
      {
        path: 'edit/:id',
        component: CreateOwnerComponent,
        resolve: {
          owner: OwnersResolver
        }
      },
      {
        path: '',
        component: ListOwnerComponent
      }

    ]
  },
  { path: '', redirectTo: '/visits', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
