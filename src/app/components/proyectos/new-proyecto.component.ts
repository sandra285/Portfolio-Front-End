import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/servicios/s-proyectos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombreP: string = '';
  descripcionP: string = '';
  mesInicioP: string = '';
  anioInicioP: string = '';
  mesFinP: string = '';
  anioFinP: string = '';
  verP: string = '';
  repoP: string = '';

  constructor(private sProyecto: SProyectosService, private router: Router){ }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proye = new Proyectos(this.nombreP, this.descripcionP, this.mesInicioP, this.anioInicioP, this.mesFinP, this.anioFinP, this.verP, this.repoP); 
    this.sProyecto.save(proye).subscribe(data => {
        this.msgAlertOK();
        this.router.navigate(['']);
      }, err => {
        this.msgAlertError();
        this.router.navigate(['']);
      }
      )
  }

  msgAlertOK = () => {
    Swal.fire({
      icon:'success',
      title: 'Proyecto añadido exitosamente!'
    })
  }

  msgAlertError = () => {
    Swal.fire({
      icon:'error',
      title: 'Error al añadir proyecto. Por favor, intente nuevamente.'
    })
  }
}
