// edit-medical-history.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {map, tap} from 'rxjs';
import {MedicalHistory} from "../../../../models";
import {MedicalHistoriesService} from "../../../../@core/services/medical-histories.service";
import {BaseLookupEntity} from "../../../../models/base-lookup-entity";
import {PatientService} from "../../../../@core/services/patients.service";
import {Patient} from "../../../../models/patient/patient";
import {DoctorsService} from "../../../../@core/services/doctors.service";
import {Doctor} from "../../../../models/doctor/doctor";

@Component({
  selector: 'app-edit-medical-history',
  templateUrl: './edit-medical-history.component.html',
  styleUrls: ['./edit-medical-history.component.scss'],
})
export class EditMedicalHistoryComponent implements OnInit {
  public medicalHistory: MedicalHistory | undefined;
  isLoading = true;
  medicalHistoryForm: FormGroup;


  filteredPatients: BaseLookupEntity[] = [];
  patients: BaseLookupEntity[] = [];

  // Add a new property and methods for doctors
  selectedDoctor: string | null = null;
  doctors: BaseLookupEntity[] = [];
  filteredDoctors: BaseLookupEntity[] = [];


  pageNumber = 1;
  pageSize = 10;

  constructor(
    private route: ActivatedRoute,
    private medicalHistoryService: MedicalHistoriesService,
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private doctorsService: DoctorsService
  ) {
    this.medicalHistoryForm = this.formBuilder.group({
      // Adjust the form controls based on your MedicalHistory model
      diagnosis: [''],
      treatment: [''],
      patientId: [''],
      assignedDoctorId: [''],
      // Add other fields as needed
    });
  }

  ngOnInit(): void {
    this.loadMedicalHistoryDetails();
    this.loadPatients();
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.doctorsService.getAll()
      .pipe(
        map((doctors: Doctor[]) => {
          return doctors.map(doctor => {
            return {
              id: doctor.id,
              name: doctor.contact.firstName + ' ' + doctor.contact.lastName,
            };
          });
        }),
        tap((doctors: BaseLookupEntity[]) => {
          this.doctors = doctors;
          this.filteredDoctors = doctors;
        }))
      .subscribe();
  }

  onDoctorSelected(event: any): void {
    const selectedDoctorId = event.option.value;
    // Update the medical history with the selected doctor's ID
    this.medicalHistory = {
      ...this.medicalHistory,
      assignedDoctorId: selectedDoctorId,
    } as MedicalHistory;

    console.log('Selected Doctor ID:', selectedDoctorId);
  }

  filterDoctors(event: any): void {
    const searchValue = event.target.value.toLowerCase();
    this.filteredDoctors = this.doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchValue)
    );

    // If the search bar reaches the end, load the next set of doctors
    if (
      this.filteredDoctors.length === this.doctors.length &&
      this.filteredDoctors.length >= this.pageSize
    ) {
      this.pageNumber++;
      this.loadDoctors();
    }
  }



  loadMedicalHistoryDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.medicalHistoryService.getById(id).subscribe(
        (medicalHistory: MedicalHistory) => {
          this.medicalHistory = medicalHistory;
          this.isLoading = false;
          this.patchFormValues(medicalHistory);
        }
      );
    }
  }

  private patchFormValues(medicalHistory: MedicalHistory): void {
    this.medicalHistoryForm.patchValue({
      diagnosis: medicalHistory.disease,
      treatment: medicalHistory.treatment,
    });
  }

  onSubmit(): void {
    if (this.medicalHistoryForm.valid) {
      // Cast this.medicalHistory to the specific type
      this.medicalHistory = { ...this.medicalHistory, ...this.medicalHistoryForm.value } as MedicalHistory;

      // Include patientId and assignedDoctorId in the request payload
      const requestPayload = {
        ...this.medicalHistory,
        patientId: this.medicalHistory.patient.id,
        assignedDoctorId: this.medicalHistory.assignedDoctor.id,
      };

      this.medicalHistoryService.update(requestPayload).pipe(
        tap(() => {
        })
      ).subscribe();
    }
  }

  loadPatients(): void {
    this.patientService.getAll()
      .pipe(
        map((patients: Patient[]) => {
          return patients.map(patient => {
            return {
              id: patient.id,
              name: patient.contact.firstName + ' ' + patient.contact.lastName,
            };
          });
        }
      ),
      tap((patients: BaseLookupEntity[]) => {
        this.patients = patients;
        this.filteredPatients = patients;
      }))
      .subscribe();
  }

  onPatientSelected(event: any): void {
    const selectedPatientId = event.option.value;

    // Explicitly define the type of this.medicalHistory
    this.medicalHistory = {
      ...this.medicalHistory!,
      patientId: selectedPatientId,
    };

    console.log('Selected Patient ID:', selectedPatientId);
  }

  filterPatients(event: any): void {
    const searchValue = event.target.value.toLowerCase();
    this.filteredPatients = this.patients.filter((patient) =>
      patient.name.toLowerCase().includes(searchValue)
    );

    // If the search bar reaches the end, load the next set of patients
    if (
      this.filteredPatients.length === this.patients.length &&
      this.filteredPatients.length >= this.pageSize
    ) {
      this.pageNumber++;
      this.loadPatients(); // Call loadPatients directly here
    }
  }
}
