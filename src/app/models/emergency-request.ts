import {EmergencyRequestStatus, EmergencyRequestType} from ".";
import {Patient} from "./patient/patient";
import {Doctor} from "./doctor/doctor";

export interface EmergencyRequest {
  id: string;
  patientId: string;
  patient: Patient;
  acceptedDoctorId: string;
  acceptedDoctor: Doctor;
  location: string;
  status: string;
  type: string;
}
