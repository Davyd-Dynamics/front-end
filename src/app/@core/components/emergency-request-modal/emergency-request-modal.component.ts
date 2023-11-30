import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmergencyRequest } from '../../../models/emergency-request';

@Component({
  selector: 'app-emergency-request-modal',
  template: `
    <h1>Emergency Request Details</h1>
    <div>
      <p><strong>ID:</strong> {{ data.id }}</p>
      <p><strong>Patient Name:</strong> пацієнт</p>
      <p><strong>Location:</strong> {{ data.location }}</p>
      <p><strong>Status:</strong> {{ data.status }}</p>

      <!-- Action buttons -->
      <button mat-raised-button color="primary" (click)="acceptRequest()">Accept</button>
      <button mat-raised-button color="warn" (click)="rejectRequest()">Reject</button>
      <button mat-raised-button (click)="closeDialog()">Close</button>
    </div>
  `
})
export class EmergencyRequestModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EmergencyRequest,
    private dialogRef: MatDialogRef<EmergencyRequestModalComponent>
  ) {}

  acceptRequest() {
    // Logic for accepting the emergency request
    // You can emit an event, perform an action, or call a service method here
    // For example: this.emergencyService.acceptEmergencyRequest(this.data.id);
  }

  rejectRequest() {
    // Logic for rejecting the emergency request
    // Similar to acceptRequest, perform the necessary actions here
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
