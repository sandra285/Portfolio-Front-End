import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formacion } from '../model/formacion';

@Injectable({
  providedIn: 'root'
})
export class SFormacionService {
  // Local
  // formURL = 'http://localhost:8080/formacion/';

  //Producción
  formURL = 'https://backend-sf.onrender.com/formacion/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Formacion[]>{
    return this.httpClient.get<Formacion[]>(this.formURL + 'lista');
  }

  public detail(id: number): Observable<Formacion>{
    return this.httpClient.get<Formacion>(this.formURL + `detail/${id}`);
  }
  
  public save(formacion: Formacion): Observable<any>{
    return this.httpClient.post<any>(this.formURL + 'create', formacion);
  }
  
  public update(id: number, formacion: Formacion): Observable<any>{
    return this.httpClient.put<any>(this.formURL + `update/${id}`, formacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.formURL + `delete/${id}`);
  }
}
