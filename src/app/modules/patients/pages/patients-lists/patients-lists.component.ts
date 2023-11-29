import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../../../@core/services/patients.service";
import {Patient} from "../../../../models/patient/patient";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patients-lists.component.html',
  styleUrls: ['./patients-lists.component.scss']
})
export class PatientListComponent implements OnInit {
  public displayedColumns: string[] = ['contact.firstName', 'contact.lastName', 'contact.email'];
  public patients: Patient[] = [];
  public totalRecords: number = this.patients.length;
  public pageSize = 10;
  public currentPage = 1;

  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getAllPatients(this.currentPage, this.pageSize).subscribe(
      (patients: Patient[]) => {
        console.log(patients)
        this.patients = patients;
        this.totalRecords = patients.length;
      }
    );
  }

  openPatientDetails(patientId: string): void {
    // Assuming 'patient-details' is the route for displaying patient details
    this.router.navigate(['patients', patientId]);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPatients();
  }
}
