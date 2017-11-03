import React from 'react';
import {render,mount} from 'enzyme';
import ConnectedformularioLogin from '../../add/component/formularioLogin';
import configureStore from 'redux-mock-store';
//el mock del store
const mockStore = configureStore();
// se testea que el componente connectado de formularioLogin
it('renders no login when store si empty', ()=>{

  const store = mockStore({login: {
    nombre:'',
    email:'',
    contrasenha:'',
    respuesta:false}});

  const wrapper = render(<ConnectedformularioLogin store={store} />);
  expect(wrapper.find(".nombre").length).toBe(0);
});
//se testea que el nombre en el componente sea 4
it('render login', ()=>{
  const store = mockStore({login: {
    nombre:'hola',
    email:'',
    contrasenha:'',
    respuesta:false}});

    const wrapper = render(<ConnectedformularioLogin store={store} />);
    expect(wrapper.find(".nombre").length).toBe(4);

});
//se testea que al dar el click con un usuario el typo se el conrrecto
it('Handle the login', ()=>{
  const store = mockStore({login: {
    nombre:'hola',
    email:'simonzea@hotmail.com',
    contrasenha:'1234567890',
    respuesta:false}});

    const wrapper = mount(<ConnectedformularioLogin store={store} />);
    wrapper.find('#product-1 button').simulate('click');

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(action[0].type).toBe("Login");
    expect(action[0].login).not.toBeNull();

});
//se testea que al dar el click con un usuario el typo se el conrrecto
it('Handle the SignUp', ()=>{
  const store = mockStore({login: {
    nombre:'hola',
    email:'simonzea@hotmail.com',
    contrasenha:'1234567890',
    respuesta:false}});

    const wrapper = mount(<ConnectedformularioLogin store={store} />);
    wrapper.find('#product-2 button').simulate('click');

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(action[0].type).toBe("SingUp");
    expect(action[0].login).not.toBeNull();

});
