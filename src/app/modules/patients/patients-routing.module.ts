import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientDetailsComponent} from "./pages/patient-details/patient-details.component";
import {PatientListComponent} from "./pages/patients-lists/patients-lists.component";
import {EditPatientComponent} from "./pages/patient-edit/patient-edit.component";

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
      {
        path: ':id/edit',
        component: EditPatientComponent
      },
      {
        path: 'create',
        component: EditPatientComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
