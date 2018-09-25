import React from "react";
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "短信验证码登录"
  };

  state = {
    phoneNumber: ""
  };

  onPressLearnMore = () => {};

  getMessageCode = () => {
    this.props.navigation.navigate('MessageCode',{phoneNumber:this.state.phoneNumber})
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.headerTitle}>短信验证码登录</Text>
        </View>
        <View style={styles.formItem}>
          <Text style={styles.formItemLabel}>手机号归属地</Text>
          <Text style={styles.formItemButton}>中国大陆</Text>
        </View>

        <View style={styles.formItem}>
          <Text style={styles.formItemLabel}>+86</Text>
          <TextInput
            style={styles.formItemUserName}
            onChangeText={text => this.setState({ phoneNumber: text })}
            placeholder="请输入您的手机号"
            value={this.state.phoneNumber}
          />
        </View>
        <TouchableOpacity
          onPress={this.getMessageCode}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtontext}>获取验证码</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff"
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 27,
    fontWeight: "600",
    marginBottom: 40
  },
  formItem: {
    width: "100%",
    height: 42,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "rgb(241, 241, 241)",
    justifyContent: "space-between",
    marginBottom: 15
  },
  formItemLabel: {
    width: 100,
    lineHeight: 42
  },
  formItemButton:{
    width: 70,
    lineHeight: 42
  },
  formItemUserName: {
    flex: 1,
    height: 42
  },
  submitButton: {
    backgroundColor: "#eb6666",
    width: "100%",
    height: 50
  },
  submitButtontext: {
    height: 50,
    lineHeight: 50,
    textAlign: "center",
    color: "#fff"
  }
});
