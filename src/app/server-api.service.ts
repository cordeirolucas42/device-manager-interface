import { Injectable } from '@angular/core';
import { Category } from './category';
import { Device } from './device';
import { CATEGORIES } from './mock-categories';
import { DEVICES } from './mock-devices';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServerApiService {
  private apiURL =
    'http://ec2-54-94-254-219.sa-east-1.compute.amazonaws.com:9000'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  createDevice(newDevice: Device): Observable<Device> {
    return this.http
      .post<Device>(`${this.apiURL}/devices`, newDevice, this.httpOptions)
      .pipe(
        tap((newDevice: Device) =>
          this.messageService.add(`created new device with id=${newDevice.id}`)
        ),
        catchError(this.handleError<Device>(`createDevice`))
      );
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.apiURL}/devices`).pipe(
      tap((_) => this.messageService.add('fetched devices')),
      catchError(this.handleError<Device[]>('getDevices', []))
    );
  }

  getDevice(id: number): Observable<Device> {
    return this.http.get<Device>(`${this.apiURL}/devices/${id}`).pipe(
      tap((_) => this.messageService.add(`fetched device id=${id}`)),
      catchError(this.handleError<Device>(`getDevice id=${id}`))
    );
  }

  deleteDevice(id: number): Observable<Device> {
    return this.http
      .delete<Device>(`${this.apiURL}/devices/${id}`, this.httpOptions)
      .pipe(
        tap((_) => this.messageService.add(`deleted device id=${id}`)),
        catchError(this.handleError<Device>(`deleteDevice id=${id}`))
      );
  }

  createCategory(newCategory: Category): Observable<Category> {
    return this.http
      .post<Category>(
        `${this.apiURL}/categories`,
        newCategory,
        this.httpOptions
      )
      .pipe(
        tap((newCategory: Category) =>
          this.messageService.add(
            `created new category with id=${newCategory.id}`
          )
        ),
        catchError(this.handleError<Category>(`createCategory`))
      );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiURL}/categories`).pipe(
      tap((_) => this.messageService.add('fetched categories')),
      catchError(this.handleError<Category[]>('getCategories', []))
    );
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiURL}/categories/${id}`).pipe(
      tap((_) => this.messageService.add(`fetched category id=${id}`)),
      catchError(this.handleError<Category>(`getCategory id=${id}`))
    );
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http
      .delete<Category>(`${this.apiURL}/categories/${id}`, this.httpOptions)
      .pipe(
        tap((_) => this.messageService.add(`deleted category id=${id}`)),
        catchError(this.handleError<Category>(`deleteCategory id=${id}`))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @ param operation - name of the operation that failed
   * @ param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.add(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
