import Navigator from './Navigator';
import{ NavigationActions} from 'react-navigation';

//estado inicial de el login en props
const initialStateLogin ={
  nombre:' ',
  email:'',
  contrasenha:' ',
  respuesta:false
}
// el reducer login
const login = (state = initialStateLogin,action)=>{
  //si modifica el nombre
   if(action.type === "Nombre_Usuario"){
    return {
      ...state,
      nombre: action.nombre
    };
}else if(action.type === "Email_Usuario"){
  //si modifica el email
 return {
   ...state,
   email: action.email
 };
}else if(action.type === "Contrasenha_Usuario"){
  //si modifica la contrasenha
 return {
   ...state,
   contrasenha: action.contrasenha
 };
  }else if(action.type === "SingUp"){
    //si se quiere registrar
   return {
     ...state,
     respuesta: action.respuesta
   };
 }else if(action.type === "Login"){
   // si se quiere loguiar
  return {
    ...state,
    respuesta: action.respuesta
  };
}
  return state;
};

//El navegador
const AppNavigator =Navigator;
//el estado inicial del navReducer
const initialNavState=AppNavigator.router.getStateForAction(NavigationActions.reset({
	index: 0,
	actions: [
	  NavigationActions.navigate({
		routeName: 'DrawerStack',
	  }),
	],
}))
// reducer para la navegacion
const navReducer = (state = initialNavState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  return nextState || state;
};

export{login ,navReducer};
