import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { SHabilidadesService } from 'src/app/servicios/s-habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habil: Habilidades[] = [];

  constructor(private sHabilidades: SHabilidadesService, private tokenService: TokenService){ }

  isLogged = false;

  ngOnInit(): void {
     this.cargarHabilidad();
     //Validación
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
  //Cargar una habilidad
  cargarHabilidad(): void {
    this.sHabilidades.lista().subscribe(data => {this.habil = data});
  }

  //Eliminar una habilidad
  delete(id?: number){
    if(id != undefined){
      this.sHabilidades.delete(id).subscribe(
        data => {
          this.msgAlertDelete();
          this.cargarHabilidad();
        }, err => {
          this.msgAlertError();
        }
      )
    }
  }
  
  msgAlertDelete = () => {
    Swal.fire({
      icon:'warning',
      title: 'Atención! Se va a eliminar la habilidad seleccionada.'
    })
  }

  msgAlertError = () => {
    Swal.fire({
      icon:'error',
      title: 'Ocurrió un error al eliminar la habilidad seleccionada. Por favor intente nuevamente.'
    })
  }
}
