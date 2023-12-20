import { Component, OnInit } from '@angular/core';
import { Doctor } from "../../../../models/doctor/doctor";
import { Router } from "@angular/router";
import {DoctorsService} from "../../../../@core/services/doctors.service";
import {
  ConfirmDeleteModalComponent
} from "../../../../@shared/components/confirm-delete-modal/confirm-delete-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {
  public displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  public doctors: Doctor[] = [];
  public totalRecords: number = this.doctors.length;
  public pageSize = 10;
  public currentPage = 1;

  constructor(private doctorService: DoctorsService,
              private router: Router,
              private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.doctorService.getAll(this.currentPage, this.pageSize).subscribe(
      (doctors: Doctor[]) => {
        console.log(doctors);
        this.doctors = doctors;
        this.totalRecords = doctors.length;
      }
    );
  }

  openDoctorDetails(doctorId: string): void {
    // Assuming 'doctor-details' is the route for displaying doctor details
    this.router.navigate(['doctors', doctorId]);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadDoctors();
  }

  editDoctorConfirmation(doctorId: string): void {
    this.router.navigate(['doctors', doctorId, 'edit']);
  }

  deleteDoctor(doctorId: string): void {
    this.doctorService.delete(doctorId).subscribe(
      () => {
        this.loadDoctors();
      },
      (error) => {
        console.error('Помилка видалення лікарів:', error);
      }
    );
  }

  public deleteDoctorConfirmation(patientId: string): void {
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Якщо користувач підтвердив видалення, виконайте логіку видалення
        this.deleteDoctor(patientId);
      }
    });
  }
}
