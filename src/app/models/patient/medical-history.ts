import {Patient} from "./patient";
import {Doctor} from "../doctor/doctor";
import {BaseLookupEntity} from "../base-lookup-entity";

export interface MedicalHistory {
  id: string;
  patientId: string;
  disease: string;
  treatment: string;
  assignedDoctorId: string;
  patient: BaseLookupEntity;
  assignedDoctor: BaseLookupEntity;
}
