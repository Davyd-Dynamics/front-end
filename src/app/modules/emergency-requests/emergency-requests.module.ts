import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmergencyRequestsRoutingModule } from './emergency-requests-routing.module';
import {EmergencyRequestListComponent} from "./pages/emergency-requests-list/emergency-requests-list.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    EmergencyRequestListComponent
  ],
  imports: [
    CommonModule,
    EmergencyRequestsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class EmergencyRequestsModule { }
