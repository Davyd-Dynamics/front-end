import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-emergency-request-modal',
  template: `
    <h1>Received Message</h1>
    <p>{{ data.message }}</p>
  `
})
export class EmergencyRequestModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
