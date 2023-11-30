import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsListsComponent } from './pages/doctors-lists/doctors-lists.component';
import { DoctorsDetailsComponent } from './pages/doctors-details/doctors-details.component';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    DoctorsListsComponent,
    DoctorsDetailsComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    MatListModule,
    MatCardModule
  ]
})
export class DoctorsModule { }
