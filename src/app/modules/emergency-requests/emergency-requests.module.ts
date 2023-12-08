import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmergencyRequestsRoutingModule } from './emergency-requests-routing.module';
import { EmergencyRequestsListComponent } from './pages/emergency-requests-list/emergency-requests-list.component';


@NgModule({
  declarations: [
    EmergencyRequestsListComponent
  ],
  imports: [
    CommonModule,
    EmergencyRequestsRoutingModule
  ]
})
export class EmergencyRequestsModule { }
