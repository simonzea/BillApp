import {login,navReducer} from '../add/reducers'
//constante de inicialisacion de la store login
const initialStateLogin ={
  nombre:' ',
  email:'',
  contrasenha:' ',
  respuesta:false
}

descrive('login'()=>{
  //se debe tener el login iniciado por defecto
  it('returns the initial state',()=>{

    expect(Login(undefined,{})).toEqual(initialStateLogin);
  });
// se testa que si guarde el nombre y que cambie en el login
  it('recive login name', ()=>{
      const loginName ={
        nombre:'hola',
        email:'',
        contrasenha:' ',
        respuesta:false
      }
  expect(Login(initialStateLogin,{type:"Nombre_Usuario", nombre:"hola"})
  ).toEqual(loginName);

// se testa que si guarde el email y que cambie en el login
  it('recive login email', ()=>{
      const loginEmail ={
        nombre:'',
        email:'hola',
        contrasenha:' ',
        respuesta:false
      }
  expect(Login(initialStateLogin,{type:"Email_Usuario", email:"hola"})
).toEqual(loginEmail);

// se testa que si guarde la contrasenha y que cambie en el login
  it('recive login contrasenha', ()=>{
      const loginConstrasenha ={
        nombre:'',
        email:'',
        contrasenha:'hola',
        respuesta:false
      }
  expect(Login(initialStateLogin,{type:"Contrasenha_Usuario", contrasenha:"hola"})
  ).toEqual(loginConstrasenha);

// se testa que si se envia un true en respuesta
//cambie la respuesta a true con SingUp
  it('recive login SingUp', ()=>{
      const loginConstrasenha ={
        nombre:'',
        email:'',
        contrasenha:'',
        respuesta:true
      }
  expect(Login(initialStateLogin,{type:"SingUp", respuesta:true})
  ).toEqual(loginConstrasenha);

// se testa que si se envia un true en true
//cambie la respuesta a true con login
  it('recive login Login', ()=>{
      const loginConstrasenha ={
        nombre:'',
        email:'',
        contrasenha:'',
        respuesta:false
      }
  expect(Login(initialStateLogin,{type:"Login", respuesta:false})
  ).toEqual(loginConstrasenha);

  })
});
