// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyBgleiohMLCxYAM4NeRSgwS07vI9qFb8-Q",
    authDomain: "todolistapp-948e9.firebaseapp.com",
    databaseURL: "https://todolistapp-948e9.firebaseio.com",
    projectId: "todolistapp-948e9",
    storageBucket: "todolistapp-948e9.appspot.com",
    messagingSenderId: "620851153350"
  }
};
