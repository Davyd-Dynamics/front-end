import {Component, OnInit} from "@angular/core";
import {Patient} from "../../../../models/patient/patient";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../../../../@core/services/patients.service";
import {tap} from "rxjs";


@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
})
export class EditPatientComponent implements OnInit {
  public patient: Patient | undefined;
  isLoading = true;
  patientForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private formBuilder: FormBuilder
  ) {
    this.patientForm = this.formBuilder.group({
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
      medicalRecordNumber: ['']
      // Додайте інші поля форми для пацієнта
    });
  }

  ngOnInit(): void {
    this.loadPatientDetails();
  }

  loadPatientDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.patientService.getById(id).subscribe(
        (patient: Patient) => {
          this.patient = patient;
          this.isLoading = false;
          this.patchFormValues(patient);
        },
        (error) => {
          // Handle error
          this.isLoading = false;
        }
      );
    }
  }

  private patchFormValues(patient: Patient): void {
    this.patientForm.patchValue({
      contact: patient.contact,
      medicalRecordNumber: patient.medicalRecordNumber
      // Patch other form fields as needed
    });
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      // Update the 'patient' object with the new form values
      this.patient = { ...this.patient, ...this.patientForm.value };
      const localDateOfBirth = new Date(this.patient!.contact.dateOfBirth);
      const utcDateOfBirth = new Date(localDateOfBirth.toISOString());
      this.patient!.contact.dateOfBirth = new Date(utcDateOfBirth.toISOString());

      this.patientService.update(this.patient!).pipe(
      ).subscribe();
    }
  }
}
