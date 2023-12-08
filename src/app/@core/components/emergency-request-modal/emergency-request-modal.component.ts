import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EmergencyRequest } from '../../../models/emergency-request';
import { EmergencyRequestsService } from '../../services/emergency-requests.service';
import {tap} from "rxjs";

enum EmergencyRequestStatus{
  Pending = 'pending',
  Rejected = 'rejected',
  Accepted = 'accepted'
}

@Component({
  selector: 'app-emergency-request-modal',
  templateUrl: './emergency-request-modal.component.html'
})
export class EmergencyRequestModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:  {emergencyRequest: EmergencyRequest},
    public dialogRef: MatDialogRef<EmergencyRequestModalComponent>,
    private readonly _emergencyRequestService: EmergencyRequestsService
  ) {}

  ngOnInit() {
    // will log the entire data object
    console.log(this.data.emergencyRequest)
  }

  acceptRequest() {
    this._emergencyRequestService.changeEmergencyRequestStatus(this.data.emergencyRequest.id, EmergencyRequestStatus.Accepted)
      .pipe(tap(_ => this.closeDialog()))
      .subscribe()
  }

  rejectRequest() {
    this._emergencyRequestService.changeEmergencyRequestStatus(this.data.emergencyRequest.id, EmergencyRequestStatus.Rejected)
      .pipe(tap(_ => this.closeDialog()))
      .subscribe()
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
