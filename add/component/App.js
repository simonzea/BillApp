import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
import  ToolBar from './ToolBar/ToolBar';
const styles = './style';
import * as  firebase from 'firebase';
import {databaseUsers} from '../lib/fireBase';

//Configuracion para el navegador
const navigationOptions ={
  title:'Home',
  headerStyle:{
    backgroundColor: '#212121'
  },
  headerTitleStyle:{
    color: '#fff'
  }
};
// Component App que muestra los usurios y el tipo de cliente
//de la base de datos y pasa a el login
export default class App extends Component {


constructor(){
  super();
// lista de cosas
  let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
  this.state = {
    itemDataSource: ds
  }
  this.renderRow=this.renderRow.bind(this);
  this.pressRow=this.pressRow.bind(this);
}



  componentWillMount(){
    this.getItems(this.itemsRef);
  }
  componentDidMount(){
    this.getItems(this.itemsRef);
  }

  getItems(itemsRef){
  //  let items = [{title:'Item One'},{title: 'Item Two'}];
  databaseUsers.once('value',(snap)=>{
    let items =[];
    snap.forEach((child)=>{
      items.push({
        correo: child.val().correo,
        name: child.val().name,
        role: child.val().role,
        _key: child.key
      })
    });
    this.setState({
      itemDataSource: this.state.itemDataSource.cloneWithRows(items)
    });
  });
  }

pressRow(item){
  console.log(item);
}
// devuelve la lista con nombre y rol
  renderRow(item){
    return(
      <TouchableHighlight onPress={()=>{this.pressRow(item);
      }}>
        <View style={styles.ls}>
          <Text style={styles.liText}>{item.name}-{item.role}</Text>

        </View>
      </TouchableHighlight>
    );
  }
  render() {
    const{navigate}=this.props.navigation;
    return (
      <View >
        <ToolBar title ="ItemLister" />
        <ListView
          style={{padding:30}}
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
        <TouchableHighlight
          //navega a login 
          onPress={()=>navigate('Login')}>
          <Text style={styles.container}>Login View</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
