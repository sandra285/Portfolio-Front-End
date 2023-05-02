import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  persona: Persona = null;

  constructor(private sPersona: PersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void { 
    this.cargarPersona();
    //Validación
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  //Carga de persona
  cargarPersona(): void {
    this.sPersona.detail(1).subscribe(data => {this.persona = data});
  }
}
