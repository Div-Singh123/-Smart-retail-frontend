import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/models/api-response';
import { ShelfDTO } from 'src/app/models/dto/shelf-dto';
import { JwtHeaderService } from 'src/app/utils/jwt-header.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetStockService {
  private url = environment.BASE_URL + '/store/'; 
  constructor(private http: HttpClient, private jwtHeader : JwtHeaderService) { }
  getStock(storeId : Number): Observable<APIResponse<ShelfDTO[]>> {
      let headers: HttpHeaders = new HttpHeaders();
      headers = this.jwtHeader.getAuthHeaders();
      return this.http.get<APIResponse<ShelfDTO[]>>(`${this.url}/{storeId}`, { headers });
  }
}
