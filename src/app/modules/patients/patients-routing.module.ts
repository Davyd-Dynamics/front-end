import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientDetailsComponent} from "./pages/patient-details/patient-details.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: PatientDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
