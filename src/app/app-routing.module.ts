import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'patients', loadChildren: () => import('./modules/patients/patients.module').then(m => m.PatientsModule) },
  { path: 'doctors', loadChildren: () => import('./modules/doctors/doctors.module').then(m => m.DoctorsModule) },
  { path: 'emergency-requests', loadChildren: () => import('./modules/emergency-requests/emergency-requests.module').then(m => m.EmergencyRequestsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
