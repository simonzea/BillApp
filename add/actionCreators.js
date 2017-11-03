import * as firebase from 'firebase';
import {databaseUsers} from './lib/fireBase';



//funcion para loguarse que requierr un emial
//una contrasenha una respuesta y el navegador
const Login = (email,contrasenha,respuesta,navigatet) => {
  const{navigate}=navigatet;
  try{
    //autenticacion en firebase
     firebase.auth().signInWithEmailAndPassword(email, contrasenha)
    respuesta : true
    //timer para pasar de paginas despues de 1,5 s
    setTimeout(()=>navigate('Home'),1500)
  } catch(error){
    console.error();
    respuesta: false
  }
  //devuelve un booleano
    return{
      type:"Login",
      respuesta
    };
};


// funcion para poderce registrar necesita un email una contrasenha
//una repuesta y un navegador
const signUp = (email,contrasenha,respuesta,navigatet) => {
  const{navigate}=navigatet;
  try{
    //creacion de un usuario
    firebase.auth().createUserWithEmailAndPassword(email, contrasenha)
    respuesta = true
    //timer para pasar de pagina
    setTimeout(()=>navigate('Home'),1500)
  } catch(error){
    respuesta= false
  }
  //devuelve un booleano de la respuesta
  return{
    type: "SignUp",
    respuesta
  };
};


// cuando se modifica el nombre
const nombreUsuario = nombre => {
  return{
    type:"Nombre_Usuario",
    nombre
  };
};


//cuando modifica el email
const emailUsuario = email => {
  return{
    type:"Email_Usuario",
    email
  };
};


//cuando modifica la contraseña
const contrasenhaUsuario = contrasenha => {
  return{
    type:"Contrasenha_Usuario",
    contrasenha
  };
};


export { nombreUsuario,emailUsuario,contrasenhaUsuario,Login,signUp };
