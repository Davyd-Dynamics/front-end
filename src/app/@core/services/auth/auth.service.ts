import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthenticatedResponse} from "../../../models/authenticated-response";
import {Contact} from "../../../models/patient/contact";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly _http: HttpClient) {}

  getProfile(): Observable<Contact> {
   const apiUrl = 'http://localhost:5000/api/v1/auth/profile';
    return this._http.get<any>(apiUrl);
  }

  async tryRefreshingTokens(token: string, refreshToken: string): Promise<boolean> {
    if (!token || !refreshToken) {
      return false;
    }

    const credentials = JSON.stringify({ accessToken: token, refreshToken: refreshToken });

    try {
      const refreshRes = await this._http.post<AuthenticatedResponse>(
        'http://localhost:5000/api/v1/auth/refresh',
        credentials,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }
      ).toPromise();

      localStorage.setItem('jwt', refreshRes!.token);
      localStorage.setItem('refreshToken', refreshRes!.refreshToken);

      return true;
    } catch (error) {
      return false;
    }
  }
}
