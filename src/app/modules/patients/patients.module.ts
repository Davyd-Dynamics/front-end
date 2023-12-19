import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import { PatientListComponent } from './pages/patients-lists/patients-lists.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatLineModule} from "@angular/material/core";
import {MatExpansionModule} from "@angular/material/expansion";
import { ConfirmDeleteModalComponent } from './components/confirm-delete-modal/confirm-delete-modal.component';
import {EditPatientComponent} from "./pages/patient-edit/patient-edit.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PatientDetailsComponent,
    PatientListComponent,
    ConfirmDeleteModalComponent,
    EditPatientComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    PatientsRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatLineModule,
    MatExpansionModule,
    FormsModule
  ]
})
export class PatientsModule { }
