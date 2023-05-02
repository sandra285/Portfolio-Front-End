export class Persona{
    id?: number; // Agregamos ? para indicar que el dato no es necesario
    nombre: string;
    segnombre: string;
    apellido: string;
    img: string;
    titulo1: string;
    titulo2: string;
    sobremi: string;
    ciudad: string;
    provincia: string;
    pais: string;

    constructor(nombre: string, segnombre:string, apellido: string, img: string, titulo1: string, titulo2: string, sobremi: string, ciudad: string, provincia: string, pais: string){
        this.nombre = nombre;
        this.segnombre = segnombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo1 = titulo1;
        this.titulo2 = titulo2;
        this.sobremi = sobremi;
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.pais = pais;
    }
}