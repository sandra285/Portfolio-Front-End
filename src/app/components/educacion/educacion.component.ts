import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/model/formacion';
import { SFormacionService } from 'src/app/servicios/s-formacion.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  form: Formacion[] = [];

  constructor(private sFormacion: SFormacionService, private tokenService: TokenService){ }

  isLogged = false;

  ngOnInit(): void {
    this.cargarFormacion();
    //Validación
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  //Carga de formacion
  cargarFormacion(): void {
    this.sFormacion.lista().subscribe(data => {this.form = data});
  }

  //Eliminar una formacion
  delete(id?: number){
    if(id != undefined){
      this.sFormacion.delete(id).subscribe(
        data => {
          this.msgAlertDelete();
          this.cargarFormacion();
        }, err => {
          this.msgAlertError();
        }
      )
    }
  }

  msgAlertDelete = () => {
    Swal.fire({
      icon:'warning',
      title: 'Atención! Se va a eliminar la educación seleccionada.'
    })
  }

  msgAlertError = () => {
    Swal.fire({
      icon:'error',
      title: 'Ocurrió un error al eliminar la educación seleccionada. Por favor intente nuevamente.'
    })
  }

}
