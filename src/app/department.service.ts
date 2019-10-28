import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IDepartment } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private _url: string = '/assets/data/departments.json';
  constructor(private http: HttpClient) { }
  getDepartments(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
