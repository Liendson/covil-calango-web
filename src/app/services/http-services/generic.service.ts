import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export abstract class AbstractGenericClass {

  public urlController = `${environment.url}`;

  constructor(public httpClient: HttpClient) { }

  save<T>(body: T): Observable<T> {
    return (body as any)?.id
      ? this.httpClient.put<T>(`${this.urlController}`, body)
      : this.httpClient.post<T>(`${this.urlController}`, body);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlController}/${id}`);
  }

  getAll<T>(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.urlController}`);
  }

  getById<T>(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.urlController}/${id}`);
  }

}
