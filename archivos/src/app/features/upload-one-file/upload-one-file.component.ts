import { Component, OnInit } from '@angular/core';
import { UploadToStorageService } from 'src/app/_services/utilities/upload-to-storage.service';

@Component({
  selector: 'app-upload-one-file',
  templateUrl: './upload-one-file.component.html',
  styleUrls: ['./upload-one-file.component.scss']
})
export class UploadOneFileComponent implements OnInit {

  constructor(public uploadToStorageService: UploadToStorageService) { }
  urlArchivo: string;

  ngOnInit() {
  }

  public async subiraStorage(event: File | any): Promise<any>{
    let ruta: string = 'Carpeta2/YYYY/MM/dd/';
    let nombreArchivo: string;
    let archivo: any;
    let metadata = null;
    // let metadata = {
    //   customMetadata: {
    //      'attr': 'valor de lo que se quiere guardar'
    //   }
    // };
    
    archivo = event.currentTarget.files[0];
    nombreArchivo = archivo.name;

    // Si existe un archivo en la lista
    if (archivo) {
    let result = await this.uploadToStorageService.uploadFile(ruta + nombreArchivo, archivo, metadata);
    this.urlArchivo = result;
    } else {
      console.log("No hay archivos para cargar")
      return null;
    }
  }

  public async delete() {
    let deleteResponse = await this.uploadToStorageService.deleteFile();
    this.uploadToStorageService.taskResponseFromUploadedFile = undefined;
    this.urlArchivo = undefined;
    console.log('respuesta al eliminar: ', deleteResponse);
}


}
