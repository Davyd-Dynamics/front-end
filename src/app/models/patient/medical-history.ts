import {Patient} from "./patient";
import {Doctor} from "../doctor/doctor";

export interface MedicalHistory {
  id: string;
  patientId: string;
  patient: Patient;
  disease: string;
  treatment: string;
  assignedDoctorId: string;
  assignedDoctor: Doctor;
}
