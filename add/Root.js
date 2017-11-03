import  React,{Component} from 'react';
import store from './store';
import rootApp from './rootApp';
import { Provider } from 'react-redux';

const AppWithNavigationState =  rootApp;
// Componente encargado de enviar el store a todos los componentes
class Root extends Component {
  render(){
    return(
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Root;
