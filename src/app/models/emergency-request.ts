import {Patient} from "./patient/patient";
import {Doctor} from "./doctor/doctor";
import {BaseLookupEntity} from "./base-lookup-entity";

export interface EmergencyRequest {
  id: string;
  patientId: string;
  patient: BaseLookupEntity;
  acceptedDoctorId: string;
  acceptedDoctor: BaseLookupEntity;
  location: string;
  status: string;
  type: string;
}
