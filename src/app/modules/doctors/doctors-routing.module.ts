import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorsDetailsComponent} from "./pages/doctors-details/doctors-details.component";
import {DoctorsListComponent} from "./pages/doctors-list/doctors-list.component";
import {AuthGuard} from "../../@core/guards/auth.guard";
import {EditPatientComponent} from "../patients/pages/patient-edit/patient-edit.component";
import {EditDoctorComponent} from "./pages/edit-doctor/edit-doctor.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: DoctorsDetailsComponent
      },
      {
        path: '',
        component: DoctorsListComponent
      },
      {
        path: ':id/edit',
        component: EditDoctorComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
