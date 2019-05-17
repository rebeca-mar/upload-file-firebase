import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UploadOneFileComponent } from './features/upload-one-file/upload-one-file.component';

const routes: Routes = [
  { path: 'archivos', component: UploadOneFileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
