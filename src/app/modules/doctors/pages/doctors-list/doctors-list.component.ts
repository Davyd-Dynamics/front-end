import { Component, OnInit } from '@angular/core';
import { Doctor } from "../../../../models/doctor/doctor";
import { Router } from "@angular/router";
import {DoctorsService} from "../../../../@core/services/doctors.service";

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

  constructor(private doctorService: DoctorsService, private router: Router) {}

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
}
