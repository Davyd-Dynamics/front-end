import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../../../@core/services/patients.service";
import {Patient} from "../../../../models/patient/patient";
import {Router} from "@angular/router";
import {ConfirmDeleteModalComponent} from "../../components/confirm-delete-modal/confirm-delete-modal.component";
import {MatDialog} from "@angular/material/dialog";

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

  constructor(private patientService: PatientService, private router: Router, private dialog: MatDialog) {}

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

  deletePatient(patientId: string): void {
    this.patientService.deletePatient(patientId).subscribe(
      () => {
        // Видалення успішне, оновіть список пацієнтів
        this.loadPatients();
      },
      (error) => {
        // Обробка помилки видалення, можна показати повідомлення про помилку
        console.error('Помилка видалення пацієнта:', error);
      }
    );
  }


  public deletePatientConfirmation(patientId: string): void {
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Якщо користувач підтвердив видалення, виконайте логіку видалення
        this.deletePatient(patientId);
      }
    });
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
