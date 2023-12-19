import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MedicalHistory} from "../../models";
import {Patient} from "../../models/patient/patient";

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoriesService {
  private readonly apiUrl = 'http://localhost:5000/api/v1/medical-histories';

  constructor(private http: HttpClient) {}

  getAll(pageNumber: number = 1, pageSize: number = 10): Observable<MedicalHistory[]> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<MedicalHistory[]>(this.apiUrl, { params });
  }

  getById(id: string): Observable<MedicalHistory> {
    return this.http.get<MedicalHistory>(`${this.apiUrl}/${id}`);
  }

  create(data: any): Observable<MedicalHistory> {
    return this.http.post<MedicalHistory>(this.apiUrl, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  update(patientData: MedicalHistory): Observable<MedicalHistory> {
    return this.http.put<MedicalHistory>(`${this.apiUrl}/${patientData.id}`, patientData);
  }
}
