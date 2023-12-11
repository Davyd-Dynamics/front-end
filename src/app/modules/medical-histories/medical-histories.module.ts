import {NgModule} from "@angular/core";
import {MedicalHistoriesListComponent} from "./pages/medical-histories-list/medical-histories-list.component";
import {CommonModule} from "@angular/common";
import {MedicalHistoriesRoutingModule} from "./medical-histories-routing.module";
import {SharedModule} from "../../@shared/shared.module";
import { MedicalHistoryDetailsComponent } from './pages/medical-history-details/medical-history-details.component';

@NgModule({
  declarations: [
    MedicalHistoriesListComponent,
    MedicalHistoryDetailsComponent
  ],
  imports: [
    CommonModule,
    MedicalHistoriesRoutingModule,
    SharedModule
  ]
})
export class MedicalHistoriesModule { }
