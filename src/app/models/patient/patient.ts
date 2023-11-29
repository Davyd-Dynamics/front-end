import {Contact} from "./contact";
import {MedicalHistory} from "./medical-history";
import {EmergencyRequest} from "../emergency-request";
import {Diagnosis} from "../diagnosis";

export interface Patient {
  id: string;
  contactId: string;
  contact: Contact;
  medicalRecordNumber: string;
  medicalHistories: MedicalHistory[];
  diagnoses: Diagnosis[];
  emergencyRequests: EmergencyRequest[];
}
