import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})

export class EditExperienciaComponent implements OnInit{

  expLab: Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        this.msgAlertError();
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
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
      title: 'Experiencia laboral actualizada exitosamente!'
    })
  }

  msgAlertError = () => {
    Swal.fire({
      icon:'error',
      title: 'Error al modificar experiencia laboral. Por favor, intente nuevamente.'
    })
  }

}
