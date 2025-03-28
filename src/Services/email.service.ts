import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailRequest } from '../Models/EmailRequest';
import { environment } from './environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl =  `${environment.apiUrl}/api/Email`; // עדכני לפי הכתובת בפועל

  constructor(private http: HttpClient) { }

  sendEmail(request: EmailRequest): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/send`, request);
  }}
