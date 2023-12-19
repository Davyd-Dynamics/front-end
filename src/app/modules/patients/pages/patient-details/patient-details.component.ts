import { Component } from '@angular/core';
import {Patient} from "../../../../models/patient/patient";
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../../../../@core/services/patients.service";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent {
  patient: Patient | undefined;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    this.loadPatientDetails();
  }

  loadPatientDetails(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Assuming 'id' is the route parameter for patient ID
    console.log(id)
    if (id) {
      this.patientService.getById(id).subscribe(
        (patient: Patient) => {
          this.patient = patient;
          this.isLoading = false;
        },
        (error) => {
          // Handle error
          this.isLoading = false;
        }
      );
    }
  }
}
