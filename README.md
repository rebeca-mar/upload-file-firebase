# upload-file-firebase
Upload a file with @angular/fire on an Angular 7 project

### Mayo 2019
Este proyecto es un demo para subir archivos a Cloud Storage con [@angular/fire](https://www.npmjs.com/package/@angular/fire). Clónelo, instale las dependencias con `npm i`, debe tener una cuenta en Firebase para utilizar su propio bucket.
<br>

Si desea agregar AngularFire a un proyecto nuevo, instale ejecutando:
```sh
npm i @angular/fire
npm install firebase @angular/fire --save
```
Existe una versión anterior: [angularfire2](https://www.npmjs.com/package/angularfire2), la cual se declara obsoleta.

## Descargar las credenciales de Firebase
Ir a la consola de Firebase --> Project Overview --> Configuración del proyecto --> Agregar app<br>
Nombre una nueva app, al finalizar copie el CDN que se muestra y colóquelo en el archivo `src/environments/environment.ts`, dentro de la propiedad **firebase**.

## Reglas de escritura pública en Firebase
Modifique su regla de Firebase a la que se muestra a continuación:
```json
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
} 
```
Esto permite la consulta y carga de archivos en el bucket, no es la manera más segura de dejarlo de esta manera porque lo hace vulnerable. Se recomienda que se limite la actividad del usuario en su aplicación con base al rol que tenga dentro de ésta. Véase: [Protege los datos del usuario](https://firebase.google.com/docs/storage/security/user-security?hl=es-419)

## Agregar firebase a app.module
Importar lo siguiente en el app.module:
```ts
// en este caso decidí que environment.dev.ts tuviera las credenciales de firebase
import { environment } from 'src/environments/environment.dev';
```
Posteriormente, agregue el módulo de AngularFire, inicialice Firebase con sus credenciales y también añada el servicio de carga:
```ts
imports: [
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
providers: [UploadToStorageService, AngularFireStorage],
```
Ejecute el proyecto con `ng s -o` y diríjase a la ruta localhost:4200/archivos

# May 2019
This project uploads a file into a Cloud Storage bucket using [@angular/fire](https://www.npmjs.com/package/@angular/fire).<br> To run this project, clone it and install dependencies with `npm i`, also an account on Firebase is needed in order to obtain personal credentials.<br>---------------------------

If you want to add Firebase into a new project, install angular fire:
```sh
npm i @angular/fire
npm install firebase @angular/fire --save
```
## Obtaining Firebase SDK snippet
Go to your Firebase console --> Project Overview --> Configuration --> Add app<br>
Name an app and then copy your personal CDN. This CDN goes into `src/environments/environment.ts` file, on **firebase** attribute, see the example file.

## Public write rules on Firebase
Once you put your CDN on the code, go to **Storage--> Rules** and modify them like below:
```json
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
} 
```
Leaving your bucket rules like this is not the safest way but it's fine only for experimental purposes.<br>The proper thing to do is to limit the user on your application. For example, only users with an specific role would upload files. View the docs: [Secure User Data](https://firebase.google.com/docs/storage/security/user-security?hl=es-419)

## Adding firebase into app.module
Import the file where you pasted your CDN into app.module:
```ts
// I decided to put my CDN into environment.dev.ts
import { environment } from 'src/environments/environment.dev';
```
Finally add AngularFireStorageModule, initialize Firebase with your CDN and don't forget the service:
```ts
imports: [
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
providers: [UploadToStorageService, AngularFireStorage],
```
Run in your terminal `ng s -o` and navigate to localhost:4200/archivos