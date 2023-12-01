import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EmergencyRequest } from '../../../models/emergency-request';
import { EmergencyRequestsService } from '../../services/emergency-requests.service';

@Component({
  selector: 'app-emergency-request-modal',
  templateUrl: './emergency-request-modal.component.html'
})
export class EmergencyRequestModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:  {emergencyRequest: EmergencyRequest},
    public dialogRef: MatDialogRef<EmergencyRequestModalComponent>,
  ) {}

  ngOnInit() {
    // will log the entire data object
    console.log(this.data.emergencyRequest)
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
