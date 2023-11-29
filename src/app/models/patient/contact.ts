import {Gender} from "../enums/gender";
import { Role } from "../enums/role";
import {Patient} from "./patient";
import {Doctor} from "../doctor/doctor";

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  address: string;
  phone: string;
  dateOfBirth: Date;
  gender: Gender;
  password: string;
  role: Role;
  refreshToken: string;
  refreshTokenExpiryTime: Date;
  patient: Patient;
  doctor: Doctor;
}
