import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { TopRightSnackbarService } from './top-right-snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UploadToStorageService {

  public uploadPercent: string;
  public percentageNumber: any;
  public uploadUrl: any;
  public taskResponseFromUploadedFile: any;

  constructor(private storage: AngularFireStorage, private personalizedSnack: TopRightSnackbarService) { }

  // Manera 2: carga archivo, muestra porcentaje de carga, obtiene la URL del archivo cargado, agrega metadata (opcional)
  // El parametro metadata se puede recibir como null si no es necesario
  public uploadFile(pathStorage: string, file: File, metadata): Promise<any> {
    return new Promise((resolve, reject) => {
      //console.log(file, 'Nombre archivo: ', file.name);
      console.log("Subiendo archivo...");
      let angularFireUploadTask: AngularFireUploadTask;
      // Definir estructura para ruta en Storage -- environment
      angularFireUploadTask = this.storage.upload(pathStorage, file);
      angularFireUploadTask.percentageChanges().subscribe((percentage: number) => {
        this.percentageNumber = percentage;
        //console.log('Porcentaje: ', this.percentageNumber, ' fixed: ', this.percentageNumber.toFixed(2));
        this.uploadPercent = Math.floor(percentage) + '%';
        //console.log('Porcentaje de carga: ', this.uploadPercent);
      }, (error) => {
        this.uploadPercent = undefined
        console.error('Ocurrió un error al cargar archivo', error);
        // Consulte el codigo de error: https://firebase.google.com/docs/storage/web/handle-errors
        if(error.code == "storage/unauthorized"){
          // Inicie request.auth como null en sus reglas de firebase: 
          this.personalizedSnack.openTopRightSnackBar('No tiene permiso para subir archivos', '', 'styleSnackDanger');
        } else{
          this.personalizedSnack.openTopRightSnackBar('Error al cargar el archivo', '', 'styleSnackDanger');
        }
        
      }, () => {
        console.info('Se completó la carga del archivo');
        file = undefined
        // Abrir snackBar de éxito. Los estilos están en styles.ccs
        this.personalizedSnack.openTopRightSnackBar('¡Archivo cargado con éxito!', '', 'styleSnackSuccess');
      });

      angularFireUploadTask.then(taskResponse => {
        if (taskResponse.state == 'success') {
          this.taskResponseFromUploadedFile = taskResponse;
          console.log('taskResponse: ', taskResponse);

          // guardar metadata si no está vacío
          if (metadata != null) {
            // Agregar metadata, si es necesario
            taskResponse.task.snapshot.ref.updateMetadata(metadata).then(response => {
              console.log('metadata guardado: ', response);
            });
          }

          // then --> its usage is for unwrapping the value of a Promise. RR
          taskResponse.task.snapshot.ref.getDownloadURL().then(
            (uploadUrl) => {
              //Reiniciar porcentaje para que la URL tome el lugar de la barra de carga
              setTimeout(this.uploadPercent = undefined, 2500);
              resolve(this.uploadUrl = uploadUrl); // resolve: is to finishing the return of a promise. RR
              //console.log('url de archivo cargado: ', uploadUrl);
            });
        }
      });
    });
  }

  public async deleteFile(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.taskResponseFromUploadedFile) {
        this.taskResponseFromUploadedFile.ref.delete().then(
          respuesta => {
            respuesta = 'Archivo eliminado';
            //console.log('delete desde servicio: ', respuesta);
            this.personalizedSnack.openTopRightSnackBar(respuesta, '', 'styleSnackWarning');
            resolve(respuesta)
          });
      }else {
        console.error("Error al eliminar el archivo")
      }
    });
  }


}
