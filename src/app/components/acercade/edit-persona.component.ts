import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImgPerfilService } from 'src/app/servicios/img-perfil.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent  implements OnInit {

  persona: Persona = null;

  constructor(private sPersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, public imgPerfilService: ImgPerfilService){ }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        this.msgAlertError();
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imgPerfilService.url;
    this.sPersona.update(id, this.persona).subscribe(
      data => {
        this.msgAlertOK();
        this.router.navigate(['']);
      }, err => {
        this.msgAlertError();
        this.router.navigate(['']);
      }
    )
  }
  
  upload($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "img_perfil" + id;
    this.imgPerfilService.upload($event, name);
  }

  msgAlertOK = () => {
    Swal.fire({
      icon:'success',
      title: 'Persona actualizada exitosamente!'
    })
  }

  msgAlertError = () => {
    Swal.fire({
      icon:'error',
      title: 'Error al modificar persona. Por favor, intente nuevamente.'
    })
  }

}
