import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidades } from '../model/habilidades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SHabilidadesService {

  // Local
  // habURL = 'http://localhost:8080/habilidades/';

  // Producción
  habURL = 'https://backend-sf.onrender.com/habilidades/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.habURL + 'lista');
  }

  public detail(id: number): Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.habURL + `detail/${id}`);
  }

  public save(habilidad: Habilidades): Observable<any>{
    return this.httpClient.post<any>(this.habURL + 'create', habilidad);
  }

  public update(id: number, habilidad: Habilidades): Observable<any>{
    return this.httpClient.put<any>(this.habURL + `update/${id}`, habilidad);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.habURL + `delete/${id}`);
  }
}
