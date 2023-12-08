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


@NgModule({
  declarations: [
    DoctorsListComponent,
    DoctorsDetailsComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule
  ]
})
export class DoctorsModule { }
