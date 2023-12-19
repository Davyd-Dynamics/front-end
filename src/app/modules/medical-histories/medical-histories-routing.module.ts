import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MedicalHistoriesListComponent} from "./pages/medical-histories-list/medical-histories-list.component";
import {MedicalHistoryDetailsComponent} from "./pages/medical-history-details/medical-history-details.component";
import {EditPatientComponent} from "../patients/pages/patient-edit/patient-edit.component";
import {EditMedicalHistoryComponent} from "./pages/edit-medical-history/edit-medical-history.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MedicalHistoriesListComponent
      },
      {
        path: ':id',
        component: MedicalHistoryDetailsComponent
      },
      {
        path: ':id/edit',
        component: EditMedicalHistoryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalHistoriesRoutingModule { }
