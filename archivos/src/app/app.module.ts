import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeaturesModule } from './features/features.module';
import { UploadOneFileComponent } from './features/upload-one-file/upload-one-file.component';
import { UploadToStorageService } from './_services/utilities/upload-to-storage.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment.dev';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule
  ],
  providers: [UploadToStorageService, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
