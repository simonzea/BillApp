import { nombreUsuario,emailUsuario,contrasenhaUsuario} from '../add/actionCreators';
import configureStore from 'redux-mock-store';

// mock del store
const mockStore = configureStore();
// testea q si nohay nada en el store regrese solo una action
//y q el typo sea el correcto y que el store.login no sea null
// con la actionCreators nombreUsuario
it('nombre usuario', ()=>{
  const store = mockStore({login:  { nombre:' ',
    email:'',
    contrasenha:' ',
    respuesta:false}})

    const nombre = "hola";
    store.dispatch(nombreUsuario(nombre));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("Nombre_Usuario");
    expect(actions[0].login).not.toBeNull();

})
// testea q si nohay nada en el store regrese solo una action
//y q el typo sea el correcto y que el store.login no sea null
// con la actionCreators emailUsuario
it('email usuario', ()=>{
  const store = mockStore({login:  { nombre:' ',
    email:'',
    contrasenha:' ',
    respuesta:false}})

    const email = "hola";
    store.dispatch(emailUsuario(email));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("Email_Usuario");
    expect(actions[0].login).not.toBeNull();

})
// testea q si nohay nada en el store regrese solo una action
//y q el typo sea el correcto y que el store.login no sea null
// con la actionCreators contrasenhaUsuario
it('constrasenha usuario', ()=>{
  const store = mockStore({login:  { nombre:' ',
    email:'',
    contrasenha:' ',
    respuesta:false}})

    const contrasenha = "hola";
    store.dispatch(contrasenhaUsuario(contrasenha));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("Contrasenha_Usuario");
    expect(actions[0].login).not.toBeNull();

})
