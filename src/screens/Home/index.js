import React from 'react';
import { View, Text } from 'react-native';
import { Button }  from 'antd-mobile';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
  };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
          title="Go to About"
          onClick={() => this.props.navigation.navigate('About',{id:5})}
        >Go to About</Button>
        </View>
      );
    }
  }


export default HomeScreen;