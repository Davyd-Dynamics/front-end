import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from '../../../../@core/services/doctors.service';
import { Doctor } from '../../../../models/doctor/doctor';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {
  public doctor: Doctor | undefined;
  isLoading = true;
  doctorForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private doctorsService: DoctorsService,
    private formBuilder: FormBuilder
  ) {
    this.doctorForm = this.formBuilder.group({
      contact: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        middleName: [''],
        email: [''],
        phone: [''],
        dateOfBirth: [''],
        gender: [''],
        address: ['']
      }),
      speciality: [''],
    });
  }

  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      contact: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        middleName: [''],
        email: [''],
        phone: [''],
        dateOfBirth: [''],
        gender: [''],
        address: [''],
      }),
      speciality: [''],
    });
    this.loadDoctorDetails();
  }

  loadDoctorDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.doctorsService.getById(id).subscribe(
        (doctor: Doctor) => {
          this.doctor = doctor;
          this.isLoading = false;
          this.patchFormValues(doctor);
        },
        (error) => {
          // Handle error
          this.isLoading = false;
        }
      );
    }
  }

  private patchFormValues(doctor: Doctor): void {
    this.doctorForm.patchValue({
      contact: {
        firstName: doctor.contact.firstName,
        lastName: doctor.contact.lastName,
        middleName: doctor.contact.middleName,
        email: doctor.contact.email,
        phone: doctor.contact.phone,
        dateOfBirth: doctor.contact.dateOfBirth,
        gender: doctor.contact.gender,
        address: doctor.contact.address,
      },
      speciality: doctor.speciality,
    });
  }


  onSubmit(): void {
    if (this.doctorForm.valid) {
      // Update the 'patient' object with the new form values
      this.doctor = { ...this.doctor, ...this.doctorForm.value };
      const localDateOfBirth = new Date(this.doctor!.contact.dateOfBirth);
      const utcDateOfBirth = new Date(localDateOfBirth.toISOString());
      this.doctor!.contact.dateOfBirth = new Date(utcDateOfBirth.toISOString());

      this.doctorsService.update(this.doctor!).pipe(
      ).subscribe();
    }
  }
}
