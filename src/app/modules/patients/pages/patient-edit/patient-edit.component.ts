import {Component, OnInit} from "@angular/core";
import {Patient} from "../../../../models/patient/patient";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../../../../@core/services/patients.service";


@Component({
  selector: 'app-edit-patient',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./edit-patient.component.scss']
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
    const id = this.route.snapshot.paramMap.get('id'); // Assuming 'id' is the route parameter for patient ID
    if (id) {
      this.patientService.getPatientById(id).subscribe(
        (patient: Patient) => {
          this.patient = patient;
          this.isLoading = false;
          this.patientForm.patchValue({
            contact: patient.contact,
            medicalRecordNumber: patient.medicalRecordNumber
            // Застосуйте тут інші значення для полів пацієнта
          });
        },
        (error) => {
          // Handle error
          this.isLoading = false;
        }
      );
    }
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      const editedPatient: Patient = {
        ...this.patient,
        ...this.patientForm.value
      };

      // Викличте метод сервісу для оновлення пацієнта
      // this.patientService.updatePatient(editedPatient).subscribe(
      //   (result) => {
      //     // Дії після успішного оновлення
      //   },
      //   (error) => {
      //     // Обробка помилок
      //   }
      // );
    }
  }
}
