import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app2 安卓3!</Text>
        <Text>接收到首页参数： {this.props.navigation.getParam('id')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
