import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UploadToStorageService } from 'src/app/_services/utilities/upload-to-storage.service';
import { PreviewPopupComponent } from '../preview-popup/preview-popup.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-upload-one-file',
  templateUrl: './upload-one-file.component.html',
  styleUrls: ['./upload-one-file.component.scss']
})
export class UploadOneFileComponent implements OnInit {

  constructor(public uploadToStorageService: UploadToStorageService, private matDialog: MatDialog) { }
  fileURL: string;

  @ViewChild('fileReceiver') receiver: ElementRef;

  ngOnInit() {
  }

  public async uploadToStorage(event: File | any): Promise<any> {
    let fileLocation: string = 'Carpeta/1/2/';
    let fileName: string;
    let pendingFile: any;
    let metadata = null;
    // let metadata = {
    //   customMetadata: {
    //      'attr': 'valor de lo que se quiere guardar'
    //   }
    // };

    pendingFile = event.currentTarget.files[0];
    fileName = pendingFile.name;

    // Si existe un pendingFile en la lista
    if (pendingFile) {
      let result = await this.uploadToStorageService.uploadFile(fileLocation + fileName, pendingFile, metadata);
      this.fileURL = result;
    } else {
      console.log("No file to upload")
      return null;
    }
  }

  public async delete() {
    let deleteResponse = await this.uploadToStorageService.deleteFile();
    this.uploadToStorageService.taskResponseFromUploadedFile = undefined;
    this.fileURL = undefined;
    if(deleteResponse)
      this.clearInput();
    console.log('Delete response: ', deleteResponse);
  }

  clearInput(){
    //console.log(this.receiver.nativeElement.files);
    this.receiver.nativeElement.value = '';
    //console.log(this.receiver.nativeElement.files);
  }


  async preview(){
    console.log('62 URL ', this.fileURL)
    const dialogPreview = this.matDialog.open(PreviewPopupComponent, {
      width: '650px',
      height: '600px',
      data: {url: this.fileURL}
    });
    console.log('68 URL ', this.fileURL)

    dialogPreview.afterClosed().subscribe(result => {
      
    });
  }

}
