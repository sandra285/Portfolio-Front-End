import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/servicios/s-proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proy: Proyectos[] = [];

  constructor(private sProyectos: SProyectosService, private tokenService: TokenService){ }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    //Validación
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

   //Carga de proyecto
   cargarProyecto(): void {
    this.sProyectos.lista().subscribe(data => {this.proy = data});
  }

  //Eliminar un proyecto
  delete(id?: number){
    if(id != undefined){
      this.sProyectos.delete(id).subscribe(
        data => {
          this.msgAlertDelete();
          this.cargarProyecto();
        }, err => {
          this.msgAlertError();
        }
      )
    }
  }

  msgAlertDelete = () => {
    Swal.fire({
      icon:'warning',
      title: 'Atención! Se va a eliminar el proyecto seleccionado.'
    })
  }

  msgAlertError = () => {
    Swal.fire({
      icon:'error',
      title: 'Ocurrió un error al eliminar el proyecto seleccionado. Por favor intente nuevamente.'
    })
  }

}
