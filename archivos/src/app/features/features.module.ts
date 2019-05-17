import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadOneFileComponent } from './upload-one-file/upload-one-file.component';

import {RouterModule} from '@angular/router';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [UploadOneFileComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  entryComponents: [UploadOneFileComponent]
})
export class FeaturesModule { }
