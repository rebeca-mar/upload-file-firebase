// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  backend: 'http://localhost:8080/',
  firebase: {
    apiKey: "AIzaSyD2sTYB3aJ0KbZDG_d9XmHpXKmZosh44wk",
    authDomain: "admin-login-548f4.firebaseapp.com",
    databaseURL: "https://admin-login-548f4.firebaseio.com",
    projectId: "admin-login-548f4",
    storageBucket: "admin-login-548f4.appspot.com",
    messagingSenderId: "401110938777",
    appId: "1:401110938777:web:8c6aede859f1db28"
  }
};
