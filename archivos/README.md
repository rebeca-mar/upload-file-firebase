# Archivos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Detalles
Para crear el proyecto en la versión 7 de Angular con scss, se ejecutó:
```sh
ng new subir-archivos-cloud --style=scss
ng update
```
Si antes generaba su proyecto en angular con la versión 5 ó 6, pase a la versión 7 actualizando también angular-cli:
```sh
ng update @angular/cli
npm i install @angular/core --save
```
Coloque la configuración del proyecto que estaba en `angular.cli.json` al archivo nuevo `angular.json`. Empiece a agregar los componentes, servicios, etc que necesite al proyecto con un [ng generate](https://angular.io/cli/generate#service-command).

## Importar el módulo al app.module
Después de crear un módulo se debe añadir al app.module
```ts
import { FeaturesModule } from './features/features.module';
```
Después se puede incluir n componentes que se relacionen con las funciones de dicho módulo.

## Instalar Angular material 7.3.7
Ejecute:
```sh
npm install --save @angular/material @angular/cdk @angular/animations
```
Si tiene este error, lo mejor es cambiar en el `package.json` la version de firebase a la indicada en consola:
```sh
npm WARN @angular/fire@5.1.3 requires a peer of firebase@^5.5.0 but none is installed. You must install peer dependencies yourself.
```
Cambie a la versión 5.5.0 en el package.json:
```json
"dependencies": {
  "firebase": "^5.5.0",
}
```
## Colocar los estilos a la aplicación
Para que los estilos scss se reflejen en la aplicación, deberá ejecutar
```sh
ng add @angular/material
```
* Seleccione un tema default para la aplicación
* Si lo requiere, elija agregar HammerJS para reconocer gestos para móvil
* También puede agregar la config para *browser animations*