import {SeverityLevel} from "./enums/severity-level";
import {Doctor} from "./doctor/doctor";

export interface Diagnosis {
  name: string;
  doctor: Doctor;
  doctorId: string;
  severityLevel: SeverityLevel;
  detectionDate: Date;
  duration: Date;
  relatedFactors: string;
}
