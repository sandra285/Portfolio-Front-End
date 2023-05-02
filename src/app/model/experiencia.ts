export class Experiencia {
    id?: number;
    nombreE: string;
    areaE: string;
    puestoE: string;
    mesInicioE: string;
    anioInicioE: string;
    mesFinE: string;
    anioFinE: string;
    descripcionE: string;

    constructor(nombreE: string, areaE: string, puestoE: string, mesInicioE: string, anioInicioE: string, mesFinE: string, anioFinE: string, descripcionE: string){
        this.nombreE = nombreE;
        this.areaE = areaE;
        this.puestoE = puestoE;
        this.mesInicioE = mesInicioE;
        this.anioInicioE = anioInicioE;
        this.mesFinE = mesFinE;
        this.anioFinE = anioFinE;
        this.descripcionE = descripcionE;
    }
}
