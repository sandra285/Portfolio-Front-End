import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  // Local
  // perURL = 'http://localhost:8080/personas/';

  // Produccion
  perURL = 'https://backend-sf.onrender.com/personas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.perURL + 'lista');
  }

  public detail(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.perURL + `detail/${id}`);
  }

  public save(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.perURL + 'create', persona);
  }

  public update(id: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.perURL + `update/${id}`, persona);
  }

}
