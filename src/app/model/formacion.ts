export class Formacion {
    id?: number;
    nombreF: string;
    tituloF: string;
    mesInicioF: string;
    anioInicioF: string;
    mesFinF: string;
    anioFinF: string;

    constructor(nombreF: string,  tituloF: string, mesInicioF: string, anioInicioF: string, mesFinF: string, anioFinF: string){
        this.nombreF = nombreF;
        this.tituloF = tituloF;
        this.mesInicioF = mesInicioF;
        this.anioInicioF = anioInicioF;
        this.mesFinF = mesFinF;
        this.anioFinF = anioFinF;
    }

}
