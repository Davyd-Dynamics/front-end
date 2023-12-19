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

  getAll(pageNumber: number = 1, pageSize: number = 10): Observable<Patient[]> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Patient[]>(this.apiUrl, { params });
  }

  getById(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${id}`);
  }

  create(patientData: any): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patientData);
  }

  update(patientData: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/${patientData.id}`, patientData);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
