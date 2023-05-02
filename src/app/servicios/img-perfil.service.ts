import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImgPerfilService {

  url: string = "";

  constructor(private storage: Storage) { }

  public upload($event: any, name: string){

    const file = $event.target.files[0];

    const imgRef = ref(this.storage, `img_perfil/` + name);

    uploadBytes(imgRef, file)
    .then(response => {this.getImagen()})
    .catch(error => console.log(error))
    
  }
  
  getImagen(){
    const imagenRef = ref(this.storage, 'img_perfil');
    list(imagenRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
      }
    })
    .catch(error => console.log(error))
  }
}
