import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import { EmergencyRequestModalComponent } from './components/emergency-request-modal/emergency-request-modal.component';



@NgModule({
  declarations: [
    EmergencyRequestModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
  ]
})
export class CoreModule { }
