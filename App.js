import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>第一个native程序!</Text>
        <Text>改变文字会自动刷新.</Text>
        <Text>在开发工具上摇晃手机.</Text>
        <Text>再来一行文字2.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
