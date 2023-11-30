import { Component } from '@angular/core';
import {Doctor} from "../../../../models/doctor/doctor";
import {ActivatedRoute} from "@angular/router";
import {DoctorsService} from "../../../../@core/services/doctors.service";

@Component({
  selector: 'app-doctors-details',
  templateUrl: './doctors-details.component.html',
  styleUrls: ['./doctors-details.component.scss']
})
export class DoctorsDetailsComponent {
  doctor: Doctor | undefined;

  constructor(private route: ActivatedRoute, private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const doctorId = params['id']; // Get doctor ID from route
      this.doctorsService.getDoctorById(doctorId).subscribe((doctor: Doctor) => {
        this.doctor = doctor; // Fetch doctor data
      });
    });
  }
}
