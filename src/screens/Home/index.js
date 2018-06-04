import React from 'react';
import { View, Text } from 'react-native';
import { Button }  from 'antd-mobile';
import axios from 'axios'

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: '首页',
    };
    componentDidMount(){
      console.log('执行生命周期');
      axios.get('http://yinhengli.com:3333/getMongoData').then((data)=>{
        console.log(data);
      })
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
          onClick={() => this.props.navigation.navigate('About',{id:5})}
        >Go to About</Button>
        </View>
      );
    }
  }


export default HomeScreen;
