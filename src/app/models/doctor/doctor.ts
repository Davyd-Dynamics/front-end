import {EmergencyRequest} from "../emergency-request";
import {MedicalHistory} from "../patient/medical-history";
import {Contact} from "../patient/contact";
import {BaseEntity} from "../base-entity";

export interface Doctor extends BaseEntity {
  contact: Contact;
  contactId: string;
  speciality: string;
  medicalHistories: MedicalHistory[];
  emergencyRequests: EmergencyRequest[];
}
