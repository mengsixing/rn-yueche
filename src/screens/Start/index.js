import React from 'react'

import {View,Text,StyleSheet,Image,ImageBackground} from 'react-native'

import {Button} from 'antd-mobile'

class Start extends React.Component{
  static navigationOptions = {
    title: '约车580',
  };
  gotoHome(){
    this.props.navigation.navigate('Home');
  }
  render(){
    return (
      <ImageBackground source={require('../../../assets/images/first-bg.jpg')} style={styles.bg}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../../../assets/images/first-logo.png')} />
          <View style={styles.content}>
            <Button style={styles.contentButton} onClick={this.gotoHome.bind(this)}>登录</Button>
            <Button style={[styles.contentButton,styles.contentButtonBottom]} onClick={this.gotoHome.bind(this)}>注册</Button>
            <Text style={styles.contentText}>最好的本地化交通平台</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles=StyleSheet.create({
  bg:{
    flex:1
  },
  logo:{
    width:100,
    height:150
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  content:{
    height:300,
    padding:50,
    alignItems:'center',
    justifyContent:'center',
  },
  contentButton:{
    width:250,
  },
  contentButtonBottom:{
    marginTop:20,
    marginBottom:50
  },
  contentText:{
    color:'white',
    fontSize:16
  }
});

export default Start;
