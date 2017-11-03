
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {nombreUsuario,emailUsuario,contrasenhaUsuario,Login,signUp} from '../actionCreators';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

// configuracion del navegador
const navigationOptions ={
  title:'Login',
  headerStyle:{
    backgroundColor: '#212121'
  },
  headerTitleStyle:{
    color: '#fff'
  }
};

// constante de texto para q a la modificacion se modifique el store del nombre
const NombreTextInput = connect((props)=>({ value: props.nombre}),
(dispatch)=>({onChangeText: (nombre)=>{dispatch(nombreUsuario(nombre));}})
)(TextInput)

// constante de texto para q a la modificacion se modifique el store del email
const EmailTextInput = connect((props)=>({ value: props.email}),
(dispatch)=>({onChangeText: (email)=>{dispatch(emailUsuario(email));}})
)(TextInput)

// constante de texto para q a la modificacion se modifique el store del contrasenha
const ContrasenhaTextInput = connect((props)=>({  value: props.contrasenha}),
(dispatch)=>({onChangeText: (contrasenha)=>{dispatch(contrasenhaUsuario(contrasenha));}})
)(TextInput)


// componente Presentacional de formularioLogin
export const formularioLogin =({HandleLogin,login,navigation,handlesignUp})=> {

    return (
      <View style={styles.container}>
        <View >
          <Text style={styles.title}>Formulario Log in</Text>
          <NombreTextInput
            style={styles.input}
            placeholder="Nombre"

          />

          <EmailTextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />

          <ContrasenhaTextInput
            style={styles.input}
            placeholder="contraseña"
            secureTextEntry={true}
          />

          <TouchableHighlight
            id ={"product-1"}
            style={styles.buttom}
            onPress={()=>(HandleLogin(login.email,
              login.contrasenha,login.respuesta,navigation))}
            >
            <Text style={styles.textButtom} >Log in</Text>
          </TouchableHighlight>

          <TouchableHighlight
            id ={"product-2"}
            style={styles.buttom}
            onPress={()=>(handlesignUp(login.email,
              login.contrasenha,login.respuesta,navigation))}
            >

            <Text style={styles.textButtom}>SingUp</Text>
          </TouchableHighlight>
        </View>
      </View>
    );

}

// estilos de formularioLogin
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop:10,
    paddingLeft:15,
    paddingRight:15,


  },
  textButtom:{
    textAlign: 'center',
    color:'white'
  },
  buttom:{
    backgroundColor:'skyblue',
    borderColor:'black',
    borderWidth: 1,
    paddingTop:15,
    paddingBottom:15

  },
  title:{
    textAlign: 'center',
    fontSize: 18
  },
  input: {
    height:40,
    marginBottom: 20
  }

});
// propiedades de formularioLogin
const mapStatetoProps = state => {
  return{
    login: state.login
    };
};

// funciondes de formularioLogin como porps
const mapStateto = dispatch => {
  return{
    handlesignUp(email,contrasenha,respuesta,navigation){
      dispatch(signUp(email,contrasenha,respuesta,navigation));
    },
    HandleLogin(email,contrasenha,respuesta,navigation){
     dispatch(Login(email,contrasenha,respuesta,navigation));
    }
  }
};


export default connect(mapStatetoProps,mapStateto)(formularioLogin);
