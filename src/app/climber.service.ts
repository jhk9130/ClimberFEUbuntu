import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Climber } from './climber';

@Injectable({
  providedIn: 'root'
})
export class ClimberService {

  private baseURL = "http://localhost:8080/api/v1/climbers";

  constructor(private httpClient: HttpClient) { }

  getClimbersList(): Observable<Climber[]>{
    return this.httpClient.get<Climber[]>(`${this.baseURL}`);
  }

  createClimber(climber: Climber): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, climber);
  }

  getClimberById(id: number): Observable<Climber>{
    return this.httpClient.get<Climber>(`${this.baseURL}/${id}`);
  }

  updateClimber(id: number, climber: Climber): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, climber);
  }

  deleteClimber(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
