import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorsDetailsComponent} from "./pages/doctors-details/doctors-details.component";
import {DoctorsListComponent} from "./pages/doctors-list/doctors-list.component";
import {AuthGuard} from "../../@core/guards/auth.guard";

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
