import React from 'react';
import App from './component/App';
import formularioLogin from './component/formularioLogin';
import {StackNavigator} from 'react-navigation';
import { connect } from 'react-redux';
import {
    TouchableHighlight,
    Text,
    View
} from 'react-native'
import * as firebase from 'firebase';
// menu y componentes
import DrawerScreen from './DrawerScreen';
//funcion para desloguearse
function logout(){
  try{
     firebase.auth().singOut()

  }catch(error){
    console.log(error)
  }
}
// la screen Permanente donde tiene  el heder constante
// y se modifica el Drawer para q se abra por un botton
const  DrawerStack = StackNavigator({
    DrawerStack: {screen: DrawerScreen}
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: 'rgb(255, 45, 85)',
            paddingLeft: 10,
            paddingRight: 10
        },
        title: 'Home',
        headerTintColor: 'white',
        headerLeft: <View>
            <TouchableHighlight
                onPress={() => {
                    if(navigation.state.index === 0){
                        navigation.navigate('DrawerOpen');
                    } else {
                        navigation.navigate('DrawerClose');
                    }
                }}>
                <Text>Menu </Text>
            </TouchableHighlight>
        </View>,
        //se muestra si esta logueado el boton para desloguearse
        headerRight:  true
          ?(<View>
            <TouchableHighlight
                onPress={logout()}
                >
                <Text>Logout</Text>
            </TouchableHighlight>
            </View>)
            :(
              <View>

                </View>
            )
    })
})



export default DrawerStack;
