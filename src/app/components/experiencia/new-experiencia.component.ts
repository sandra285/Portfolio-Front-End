import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreE: string = '';
  areaE: string = '';
  puestoE: string = '';
  mesInicioE: string = '';
  anioInicioE: string = '';
  mesFinE: string = '';
  anioFinE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router){ }

  ngOnInit(): void {
   
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.areaE, this.puestoE, this.mesInicioE, this.anioInicioE, this.mesFinE, this.anioFinE, this.descripcionE); 
    this.sExperiencia.save(expe).subscribe(data => {
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
      title: 'Experiencia laboral añadida exitosamente!'
    })
  }

  msgAlertError = () => {
    Swal.fire({
      icon:'error',
      title: 'Error al añadir experiencia laboral. Por favor, intente nuevamente.'
    })
  }
}
