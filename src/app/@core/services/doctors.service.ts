import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Doctor} from "../../models/doctor/doctor";
import {Patient} from "../../models/patient/patient";

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private readonly apiUrl = 'http://localhost:5000/api/v1/doctors';

  constructor(private http: HttpClient) {}

  getAll(pageNumber: number = 1, pageSize: number = 10): Observable<Doctor[]> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Doctor[]>(this.apiUrl, { params });
  }

  getById(id: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/${id}`);
  }

  create(doctorData: any): Observable<Doctor> {
    return this.http.post<Doctor>(this.apiUrl, doctorData);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  update(doctorData: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.apiUrl}/${doctorData.id}`, doctorData);
  }
}
