import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { OwnersService } from './owners/owners.service';
import { PetsComponent } from './pets/pets.component';
import { VetsComponent } from './vets/vets.component';
import { VetsService } from './vets/vets.service';
import { CreateVisitComponent } from './visits/create-visit/create-visit.component';
import { ListVisitComponent } from './visits/list-visit/list-visit.component';
import { ListOwnerComponent } from './owners/list-owner/list-owner.component';
import { CreateOwnerComponent } from './owners/create-owner/create-owner.component';
import { OwnersComponent } from './owners/owners.component';
import {CardModule} from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { VisitsComponent } from './visits/visits.component';
import { CreateVetComponent } from './vets/create-vet/create-vet.component';
import { ListVetComponent } from './vets/list-vet/list-vet.component';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [
    PetsComponent,
    VetsComponent,
    CreateVisitComponent,
    ListVisitComponent,
    ListOwnerComponent,
    CreateOwnerComponent,
    OwnersComponent,
    VisitsComponent,
    CreateVetComponent,
    ListVetComponent,

  ],
  imports: [
    CommonModule,
    MenuModule,
    BrowserAnimationsModule,
    CardModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    DropdownModule
  ],
  providers: [
    OwnersService,
    VetsService
  ]
})
export class PetClinicModule { }
