import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/model/formacion';
import { SFormacionService } from 'src/app/servicios/s-formacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  
    nombreF: string = '';
    tituloF: string = '';
    mesInicioF: string = '';
    anioInicioF: string = '';
    mesFinF: string = '';
    anioFinF: string = '';

  constructor(private sFormacion: SFormacionService, private router: Router){ }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const formac = new Formacion(this.nombreF, this.tituloF, this.mesInicioF, this.anioInicioF, this.mesFinF, this.anioFinF); 
    this.sFormacion.save(formac).subscribe(data => {
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
      title: 'Educación añadida exitosamente!'
    })
  }

  msgAlertError = () => {
    Swal.fire({
      icon:'error',
      title: 'Error al añadir educación. Por favor, intente nuevamente.'
    })
  }

}
