import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { BehaviorSubject } from 'rxjs';
import {EmergencyRequest} from "../../models/emergency-request";
import {EmergencyRequestModalComponent} from "../components/emergency-request-modal/emergency-request-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class EmergencyRequestsService {
  private hubConnection!: signalR.HubConnection;
  private emergencyRequestSource = new BehaviorSubject<EmergencyRequest>({} as EmergencyRequest);
  emergencyRequest$ = this.emergencyRequestSource.asObservable();

  constructor(public dialog: MatDialog) {}

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/emergency-requests') // Replace with your SignalR hub URL
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public addEmergencyRequestListener = () => {
    this.hubConnection.on('ChangedEmergencyRequest', (message: EmergencyRequest) => {
      console.log('Received message');
      console.log(message)
      this.openEmergencyRequestDialog(message);
    });
  }

  private openEmergencyRequestDialog(data: EmergencyRequest): void {
    this.dialog.open(EmergencyRequestModalComponent, {
      data: data,
      width: '400px',
      // Add more dialog configurations as needed
    });
  }
}
