import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import { PatientListComponent } from './pages/patients-lists/patients-lists.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {CoreModule} from "../../@core/core.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    PatientDetailsComponent,
    PatientListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    PatientsRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class PatientsModule { }
