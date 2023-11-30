import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import {MatDialog} from "@angular/material/dialog";
import {EmergencyRequestModalComponent} from "../components/emergency-request-modal/emergency-request-modal.component";

@Injectable({
  providedIn: 'root'
})
export class EmergencyRequestsService {
  private hubConnection!: signalR.HubConnection

  constructor(private dialog: MatDialog) {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000') // Replace with your SignalR hub URL
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))

    this.hubConnection.on('ReceiveMessage', (message: string) => {
      this.openDialog(message);
    });
  }

  openDialog(message: string): void {
    this.dialog.open(EmergencyRequestModalComponent, {
      data: { message },
      width: '400px'
      // Add more dialog configurations as needed
    });
  }
}
