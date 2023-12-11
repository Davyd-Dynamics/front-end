import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MedicalHistoriesListComponent} from "./pages/medical-histories-list/medical-histories-list.component";
import {MedicalHistoryDetailsComponent} from "./pages/medical-history-details/medical-history-details.component";

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalHistoriesRoutingModule { }
