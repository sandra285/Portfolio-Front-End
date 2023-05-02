import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { SHabilidadesService } from 'src/app/servicios/s-habilidades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit{
  
  hab: Habilidades = null;

  constructor(private sHabilidad: SHabilidadesService, private activatedRouter: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.detail(id).subscribe(
      data => {
        this.hab = data;
      }, err => {
        this.msgAlertError();
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.update(id, this.hab).subscribe(
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
      title: 'Habilidad actualizada exitosamente!'
    })
  }

  msgAlertError = () => {
    Swal.fire({
      icon:'error',
      title: 'Ocurrió un error al actualizar habilidad. Por favor, intente nuevamente.'
    })
  }
}

