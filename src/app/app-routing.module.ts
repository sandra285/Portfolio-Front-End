import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewHabilidadComponent } from './components/habilidades/new-habilidad.component';
import { EditHabilidadComponent } from './components/habilidades/edit-habilidad.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { EditPersonaComponent } from './components/acercade/edit-persona.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexperiencia', component: NewExperienciaComponent},
  {path: 'editexperiencia/:id', component: EditExperienciaComponent},
  {path: 'nuevaformacion', component: NewEducacionComponent},
  {path: 'editformacion/:id', component: EditEducacionComponent},
  {path: 'nuevahabilidad', component: NewHabilidadComponent},
  {path: 'edithabilidad/:id', component: EditHabilidadComponent},
  {path: 'nuevoproyecto', component: NewProyectoComponent},
  {path: 'editproyecto/:id', component: EditProyectosComponent},
  {path: 'editpersona/:id', component: EditPersonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
