import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {EmergencyRequestsService} from "./@core/services/emergency-requests.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public signalRService: EmergencyRequestsService) { }
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addEmergencyRequestListener();
  }
}
