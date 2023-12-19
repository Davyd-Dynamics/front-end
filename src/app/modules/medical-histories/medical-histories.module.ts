import {NgModule} from "@angular/core";
import {MedicalHistoriesListComponent} from "./pages/medical-histories-list/medical-histories-list.component";
import {CommonModule} from "@angular/common";
import {MedicalHistoriesRoutingModule} from "./medical-histories-routing.module";
import {SharedModule} from "../../@shared/shared.module";
import { MedicalHistoryDetailsComponent } from './pages/medical-history-details/medical-history-details.component';
import { EditMedicalHistoryComponent } from './pages/edit-medical-history/edit-medical-history.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  declarations: [
    MedicalHistoriesListComponent,
    MedicalHistoryDetailsComponent,
    EditMedicalHistoryComponent
  ],
  imports: [
    CommonModule,
    MedicalHistoriesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ]
})
export class MedicalHistoriesModule { }
