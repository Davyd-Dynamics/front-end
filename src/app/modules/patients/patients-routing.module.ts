import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientDetailsComponent} from "./pages/patient-details/patient-details.component";
import {PatientListComponent} from "./pages/patients-lists/patients-lists.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: PatientDetailsComponent
      },
      {
        path: '',
        component: PatientListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
