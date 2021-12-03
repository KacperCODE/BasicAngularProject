import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiConfig } from './api.model';

export const API_CONFIG = new InjectionToken('apiConfig');

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = this.apiConfig.baseUrl;

  constructor(
    @Inject(API_CONFIG) private apiConfig: ApiConfig,
    private httpClient: HttpClient) { }

    get<T>(endpoint: string, params?: any, headers?: HttpHeaders): Observable<T> {
      const url = this.baseUrl + endpoint;
  
      return this.httpClient
        .get<T>(url, { params, headers })
        .pipe(catchError(this.handleError)) as Observable<T>;
    }
  
    post<T>(endpoint: string, body: any, params?: any): Observable<T> {
      const url = this.baseUrl + endpoint;
  
      return this.httpClient
        .post<T>(url, body, {
          params
        })
        .pipe(catchError(this.handleError)) as Observable<T>;
    }
  
    put<T>(endpoint: string, body: any, params?: any): Observable<T> {
      const url = this.baseUrl + endpoint;
  
      return this.httpClient
        .put<T>(url, body, {
          params,
        })
        .pipe(catchError(this.handleError)) as Observable<T>;
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
      return throwError(error.error);
    }
}
