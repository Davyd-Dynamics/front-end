import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { MatDialog } from "@angular/material/dialog";
import { EmergencyRequestModalComponent } from "../components/emergency-request-modal/emergency-request-modal.component";
import { EmergencyRequest } from "../../models/emergency-request";

@Injectable({
  providedIn: 'root'
})
export class EmergencyRequestsService {
  private hubConnection!: signalR.HubConnection;

  constructor(private dialog: MatDialog) {
    this.startConnection();
  }

  private startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/emergency-requests')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))

    this.hubConnection.on('ChangedEmergencyRequest', (message: EmergencyRequest) => {
      this.openDialog(message);
    });
  }

  openDialog(emergencyRequest: EmergencyRequest): void {
    this.dialog.open(EmergencyRequestModalComponent, {
      data: { emergencyRequest },
      width: '400px',
      disableClose: true,
    });
  }
}
