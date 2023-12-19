import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {EmergencyRequestModalComponent} from "./components/emergency-request-modal/emergency-request-modal.component";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink, RouterOutlet} from "@angular/router";
import { AppShellComponent } from './components/app-shell/app-shell.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AppHomeComponent } from './components/app-home/app-home.component';



@NgModule({
  declarations: [
    EmergencyRequestModalComponent,
    AppShellComponent,
    AppHomeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterOutlet,
    MatDialogModule,
  ],
  exports: [AppShellComponent]
})
export class CoreModule { }
