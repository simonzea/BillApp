import React from 'react';
import App from './component/App';
import formularioLogin from './component/formularioLogin';
import {DrawerNavigator} from 'react-navigation';

const DrawerScreen = DrawerNavigator({
//menu del Drawer y los componentes
  Home:{screen:App},
  Login:{screen:formularioLogin}
}, {
    headerMode: 'none',
})

export default DrawerScreen;
