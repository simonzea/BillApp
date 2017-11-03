import * as firebase from 'firebase';
//conecion a fireBase
  var config ={
    apiKey: "AIzaSyD8n_fa4tCVOTNzgCZ9t2KCg5mpui3zbEw",
        authDomain: "mi-bill.firebaseapp.com",
        databaseURL: "https://mi-bill.firebaseio.com",
        projectId: "mi-bill",
        storageBucket: "mi-bill.appspot.com",
        messagingSenderId: "75006160598"

  };
//inicialisacion de la base de datos
  firebase.initializeApp(config);
//referencia hacia usuario en la base de datos
export const databaseUsers = firebase.database().ref('users/');
