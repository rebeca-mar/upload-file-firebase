import { Component, OnInit, Inject, ViewChildren, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UploadOneFileComponent } from '../upload-one-file/upload-one-file.component'

@Component({
  selector: 'app-preview-popup',
  templateUrl: './preview-popup.component.html',
  styleUrls: ['./preview-popup.component.scss']
})
export class PreviewPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadOneFileComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  @ViewChildren('imageFrame') imageFrame: ElementRef;

  ngOnInit() {
    if (this.data.url) {
      console.log('url modal', this.data.url)
      this.showPreview(this.data.url)
    }
  }

  closePopup(): any {
    this.dialogRef.close();
  }

  showPreview(url: string) {
    let fileName: string = url.substring(url.lastIndexOf('/') + 1).split('?')[0];
    // [3] es la posición donde debe terminar de cortar. Esto dependerá de la ruta del archivo
    fileName = decodeURIComponent(fileName).split('/')[3];
    console.log('nombre archivo: ', fileName);

    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function (event) {
      // var a = document.createElement('a'); //crear un elemento <a></a>
      // a.href = window.URL.createObjectURL(xhr.response); //is a blob response
      // a.style.display = 'none';
      // a.target = '_blank'; // abre una pestaña nueva y abre el documento. Preview
      // document.body.appendChild(a);
      // a.click();
      // delete a.target;
    };
    xhr.open('GET', url);
    xhr.send();

    let embeddedImage = document.getElementById('imageFrame');
    embeddedImage.setAttribute('src', `https://docs.google.com/viewer?&embedded=true`);
    
    // Si mostrará un pdf
    // let obj = document.getElementById('mypdf');
    // obj.setAttribute('data', url);
    // Se necesita enviar la url de la ubicación del archivo
    // let pdfView = document.getElementById('pdfView');
    // pdfView.setAttribute('src',  `https://docs.google.com/viewer?url=${url}&embedded=true`);

  }

}
