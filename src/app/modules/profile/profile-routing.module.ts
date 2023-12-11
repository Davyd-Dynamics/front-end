import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientDetailsComponent} from "../patients/pages/patient-details/patient-details.component";
import {PatientListComponent} from "../patients/pages/patients-lists/patients-lists.component";
import {ProfileDetailsComponent} from "./pages/profile-details/profile-details.component";
import {AuthGuard} from "../../@core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProfileDetailsComponent,
        canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
