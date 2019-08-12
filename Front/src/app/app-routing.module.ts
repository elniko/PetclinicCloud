import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOwnerComponent } from './pet-clinic/owners/create-owner/create-owner.component';
import { ListOwnerComponent } from './pet-clinic/owners/list-owner/list-owner.component';
import { OwnersComponent } from './pet-clinic/owners/owners.component';
import {PetsComponent} from "./pet-clinic/pets/pets.component";
import {VetsComponent} from "./pet-clinic/vets/vets.component";
import { ListVisitComponent } from './pet-clinic/visits/list-visit/list-visit.component';


const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'vets', component: VetsComponent },
  { path: 'visits',
    component: ListVisitComponent,

  },
  { path: 'owners',
    component: OwnersComponent ,
    children: [
      {
        path: 'new',
        component: CreateOwnerComponent,
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
