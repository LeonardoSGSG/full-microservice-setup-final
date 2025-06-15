import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsolidatedDataResponse } from '../models/consolidated-data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly apiUrl = 'http://localhost:8084/api/data/consolidated';

  constructor(private http: HttpClient) {}

  getConsolidatedData(): Observable<ConsolidatedDataResponse> {
    return this.http.get<ConsolidatedDataResponse>(this.apiUrl);
  }
}
