import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { SHabilidadesService } from 'src/app/servicios/s-habilidades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit{
  
  nombreH: string;
  porcentajeH: number;
  imgH: string;

  constructor(private sHabilidad: SHabilidadesService, private router: Router){ }

  ngOnInit(): void {
   
  }

  onCreate(): void {
    const habilidad = new Habilidades(this.nombreH, this.porcentajeH); 
    this.sHabilidad.save(habilidad).subscribe(data => {
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
      title: 'Habilidad añadida exitosamente!'
    })
  }

  msgAlertError = () => {
    Swal.fire({
      icon:'error',
      title: 'Ocurrió un error al añadir habilidad. Por favor, intente nuevamente.'
    })
  }

}
