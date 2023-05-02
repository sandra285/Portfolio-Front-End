import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  exp: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService){ }
  
  isLogged = false;

  ngOnInit(): void {
    
    this.cargarExperiencia();
    //Validación
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  //Carga de experiencia
  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => {this.exp = data});
  }

  //Eliminar una experiencia
  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.msgAlertDelete();
          this.cargarExperiencia();
        }, err => {
          this.msgAlertError();
        }
      )
    }
  }

  msgAlertDelete = () => {
    Swal.fire({
      icon:'warning',
      title: 'Atención! Se va a eliminar la experiencia laboral seleccionada.'
    })
  }

  msgAlertError = () => {
    Swal.fire({
      icon:'error',
      title: 'Ocurrió un error al eliminar la experiencia laboral seleccionada. Por favor intente nuevamente.'
    })
  }

}
