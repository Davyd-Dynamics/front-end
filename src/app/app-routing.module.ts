import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./@core/guards/auth.guard";
import {AppHomeComponent} from "./@core/components/app-home/app-home.component";

const routes: Routes = [
  { path: 'home', component: AppHomeComponent },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'patients', loadChildren: () => import('./modules/patients/patients.module').then(m => m.PatientsModule), canActivate: [AuthGuard] },
  { path: 'doctors', loadChildren: () => import('./modules/doctors/doctors.module').then(m => m.DoctorsModule), canActivate: [AuthGuard] },
  { path: 'emergency-requests', loadChildren: () => import('./modules/emergency-requests/emergency-requests.module').then(m => m.EmergencyRequestsModule), canActivate: [AuthGuard] },
  { path: 'medical-histories', loadChildren: () => import('./modules/medical-histories/medical-histories.module').then(m => m.MedicalHistoriesModule), canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
