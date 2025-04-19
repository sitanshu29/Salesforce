import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesforceService {
  private apiUrl = `${environment.apiBaseUrl}/salesforce/accounts`; // Backend API endpoint

  constructor(private http: HttpClient) {

  }

  getAccounts(page: number, pageSize: number): Observable<any> {
    let headers = new HttpHeaders();

    const token = localStorage.getItem('token');
    headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const url = `${this.apiUrl}?page=${page}&pageSize=${pageSize}`;
    return this.http.get(url, { headers }).pipe(
      catchError(error => {
        if (error.status === 401) {
          alert('Session expired. Please login again.');
          localStorage.removeItem('token');
          window.location.href = '/';
        }
        return throwError(() => error);
      })
    );
  }
}
