import React from 'react';
import { View,Button, Text } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: '首页',
    };
    componentDidMount(){
      console.log('执行生命周期');
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
          onPress={() => this.props.navigation.navigate('About',{id:5})}
          title="123"
        >Go to About</Button>
        </View>
      );
    }
  }


export default HomeScreen;
