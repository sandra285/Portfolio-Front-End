import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any>{
    // console.log('El servicio portfolio funciona ok');
    return this.http.get('../../assets/data/data.json');
  }
}
