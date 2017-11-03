import React,{Component} from 'react';
import Navigator from './Navigator';
import { connect } from 'react-redux';
import { AppRegistry, addNavigationHelpers } from 'react-navigation';
// el stack navigator
const AppNavigator = Navigator;
//Componete encargado de conectar redux con el Stack navigator
class rootApp extends Component{
  render(){
    return(
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })}/>
    );
  }
}
//props del rootApp
const mapStateToProps = (state) => ({
  nav: state.navReducer,
  login: state.login
});

export default connect(mapStateToProps)(rootApp);
