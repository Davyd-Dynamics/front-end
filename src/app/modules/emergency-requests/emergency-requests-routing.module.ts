import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmergencyRequestListComponent} from "./pages/emergency-requests-list/emergency-requests-list.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EmergencyRequestListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergencyRequestsRoutingModule { }
