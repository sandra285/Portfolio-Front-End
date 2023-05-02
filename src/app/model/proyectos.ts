export class Proyectos {
    id?: number;
    nombreP: string;
    descripcionP: string;
    mesInicioP: string;
    anioInicioP: string;
    mesFinP: string;
    anioFinP: string;
    verP: string;
    repoP: string;

    constructor(nombreP: string, descripcionP: string, mesInicioP: string, anioInicioP: string, mesFinP: string, anioFinP: string, verP: string, repoP: string){
                    this.nombreP = nombreP;
                    this.descripcionP = descripcionP;
                    this.mesInicioP = mesInicioP;
                    this.anioInicioP = anioInicioP;
                    this.mesFinP = mesFinP;
                    this.anioFinP = anioFinP;
                    this.verP = verP;
                    this.repoP = repoP;
    }
    
}
