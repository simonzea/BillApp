import {
    StackNavigator
} from 'react-navigation';
//screen Permanente
import DrawerStack from './DrawerStack.js';
// nevegador del App
const Navigator = StackNavigator({
    drawerStack: {screen: DrawerStack},

}, {
    headerMode: 'none',
    initialRouteName: 'drawerStack'
})

export default Navigator;
