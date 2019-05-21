import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadOneFileComponent } from './upload-one-file/upload-one-file.component';

import {RouterModule} from '@angular/router';
import { MaterialModule } from '../material.module';
import { PreviewPopupComponent } from './preview-popup/preview-popup.component';

@NgModule({
  declarations: [UploadOneFileComponent, PreviewPopupComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  entryComponents: [UploadOneFileComponent, PreviewPopupComponent]
})
export class FeaturesModule { }
