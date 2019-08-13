import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { PetsComponent } from './pets/pets.component';
import { VetsComponent } from './vets/vets.component';
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



@NgModule({
  declarations: [
    PetsComponent,
    VetsComponent,
    CreateVisitComponent,
    ListVisitComponent,
    ListOwnerComponent,
    CreateOwnerComponent,
    OwnersComponent,

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
    TableModule
  ]
})
export class PetClinicModule { }
