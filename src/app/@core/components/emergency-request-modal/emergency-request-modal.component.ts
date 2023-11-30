import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmergencyRequest } from '../../../models/emergency-request';
import {EmergencyRequestsService} from "../../services/emergency-requests.service";

@Component({
  selector: 'app-emergency-request-modal',
  templateUrl: './emergency-request-modal.component.html'
})
export class EmergencyRequestModalComponent implements OnInit {
  data: EmergencyRequest;

  constructor(
    private emergencyRequestsService: EmergencyRequestsService,
    public dialogRef: MatDialogRef<EmergencyRequestModalComponent>
  ) {
    this.data = {} as EmergencyRequest;
  }

  ngOnInit(): void {
    this.emergencyRequestsService.emergencyRequest$.subscribe((data: EmergencyRequest) => {
      this.data = data;
    });
  }

  acceptRequest() {
    // Logic for accepting the emergency request
    // You can call the service method here to handle the acceptance
    // For example: this.emergencyRequestsService.acceptEmergencyRequest(this.data.id);
  }

  rejectRequest() {
    // Logic for rejecting the emergency request
    // Similar to acceptRequest, perform the necessary actions here
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
