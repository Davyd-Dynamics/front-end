import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsDetailsComponent } from './pages/doctors-details/doctors-details.component';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {DoctorsListComponent} from "./pages/doctors-list/doctors-list.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import { EditDoctorComponent } from './pages/edit-doctor/edit-doctor.component';
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../../@shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  declarations: [
    DoctorsListComponent,
    DoctorsDetailsComponent,
    EditDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatExpansionModule
  ]
})
export class DoctorsModule { }
