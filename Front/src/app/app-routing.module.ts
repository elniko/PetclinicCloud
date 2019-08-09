import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetsComponent} from "./pet-clinic/pets/pets.component";
import {VetsComponent} from "./pet-clinic/vets/vets.component";
import {VisitsComponent} from "./pet-clinic/visits/visits.component";
import {OwnersComponent} from "./pet-clinic/owners/owners.component";


const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'vets', component: VetsComponent },
  { path: 'visits', component: VisitsComponent },
  { path: 'owners', component: OwnersComponent },
  { path: '', redirectTo: '/visits', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
