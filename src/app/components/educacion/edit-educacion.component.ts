import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formacion } from 'src/app/model/formacion';
import { SFormacionService } from 'src/app/servicios/s-formacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit{
  
  formac: Formacion =  null;
  
  constructor(private sFormacion: SFormacionService, private activatedRouter: ActivatedRoute, private router: Router){ }
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sFormacion.detail(id).subscribe(
      data => {
        this.formac = data;
      }, err => {
        this.msgAlertError();
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sFormacion.update(id, this.formac).subscribe(
      data => {
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
      title: 'Educación actualizada exitosamente!'
    })
  }

  msgAlertError = () => {
    Swal.fire({
      icon:'error',
      title: 'Error al actualizar educación. Por favor, intente nuevamente.'
    })
  }

}
