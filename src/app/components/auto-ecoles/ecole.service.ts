import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EcoleConduite } from '../../model/ecole-conduite';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcoleService {
  private apiUrl = `${environment.apiUrl}/ecoles`; 


  constructor(private http: HttpClient) { }

  getAutoEcoles(): Observable<EcoleConduite[]> {
    return this.http.get<EcoleConduite[]>(this.apiUrl);
  }
}
