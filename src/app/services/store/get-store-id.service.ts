import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/models/api-response';
import { JwtHeaderService } from 'src/app/utils/jwt-header.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetStoreIdService {

  private url = environment.BASE_URL + '/storemanager/storeid'; 
  constructor(private http: HttpClient, private jwtHeader : JwtHeaderService) { }
  getStoreId(): Observable<APIResponse<number>> {
      let headers: HttpHeaders = new HttpHeaders();
      headers = this.jwtHeader.getAuthHeaders();
      return this.http.get<APIResponse<number>>(`${this.url}`, { headers });
  }
}
