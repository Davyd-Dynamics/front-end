import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { BehaviorSubject } from 'rxjs';
import {EmergencyRequest} from "../../models/emergency-request";
import {EmergencyRequestModalComponent} from "../components/emergency-request-modal/emergency-request-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {Patient} from "../../models/patient/patient";

@Injectable({
  providedIn: 'root'
})
export class EmergencyRequestsService {
  private readonly apiUrl = 'http://localhost:5000/api/v1/emergency-requests';

  private hubConnection!: signalR.HubConnection;
  private emergencyRequestSource = new BehaviorSubject<EmergencyRequest>({} as EmergencyRequest);
  emergencyRequest$ = this.emergencyRequestSource.asObservable();

  constructor(public dialog: MatDialog,
              private readonly http: HttpClient) {}

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
      this.openEmergencyRequestDialog(message);
    });
  }

  public changeEmergencyRequestStatus(emergencyRequestId : string, status : string){
    return this.http.post(`${this.apiUrl}/${emergencyRequestId}/status`, {emergencyRequestId, status});
  }

  private openEmergencyRequestDialog(emergencyRequest: EmergencyRequest): void {
    console.log(emergencyRequest)
    this.dialog.open(EmergencyRequestModalComponent, {
      data: { emergencyRequest: emergencyRequest},
      width: '400px',
      // Add more dialog configurations as needed
    });
  }
}
