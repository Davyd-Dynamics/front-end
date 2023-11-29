import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Patient} from "../../models/patient/patient";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly apiUrl = 'http://localhost:5000/api/v1/patients';

  constructor(private http: HttpClient) {}

  getAllPatients(filter: any): Observable<Patient[]> {
    const params = new HttpParams().set('filter', JSON.stringify(filter));
    return this.http.get<Patient[]>(this.apiUrl, { params });
  }

  getPatientById(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${id}`);
  }

  createPatient(patientData: any): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patientData);
  }

  deletePatient(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
