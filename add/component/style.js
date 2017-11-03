'use strict'
let React = require('react-native');
let {StyleSheet} = React;
const constants = {
  actionColor : '#3cb371'
}

module.exports = StyleSheet.create({
navbar: {
  alignItems: 'center',
  backgroundColor: '#fff',
  borderBottomColor: '#eee',
  borderColor: 'transparent',
  borderWidth: 1,
  justifyContent: 'center',
  height: 44,
  flexDirection: 'row'
},
headerStyle:{
  backgroundColor: '#212121'
},
navbarTitle: {
  color: '#444',
  fontSize: 16,
  fontWeight: "500"
},
ToolBar: {
  backgroundColor: '#fff',
  height: 22
},
container: {
  flex: 1,
  backgroundColor: '#F5FCFF',
  paddingTop:40,
  marginTop:40,
  paddingLeft:15,
  paddingRight:15,


}

});
