import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/models/api-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = environment.BASE_URL + '/users'; // change if needed

  constructor(private http: HttpClient) { }

  //login via cred
  login(data: any): Observable<APIResponse<string>> {
    return this.http.post<APIResponse<string>>(
      `${this.baseUrl}/login`,
      data
    );
  }
}
