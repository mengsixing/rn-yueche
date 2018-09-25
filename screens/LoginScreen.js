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
    title: "登录"
  };

  state = {
    userName: "",
    password: ""
  };

  onPressLearnMore = () => {};

  login = ()=>{
    console.log('submit login.');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.more}>
          <Text style={styles.moreText}>更多</Text>
        </View>
        <Image
          source={require("../assets/images/loginLogo.jpg")}
          style={styles.welcomeImage}
        />
        <View style={styles.formItem}>
          <Text style={styles.formItemLabel}>账号</Text>
          <TextInput
            style={styles.formItemUserName}
            onChangeText={text => this.setState({ userName: text })}
            placeholder="手机号/邮箱/优程会员名"
            value={this.state.userName}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.formItemLabel}>密码</Text>
          <TextInput
            style={styles.formItemUserName}
            onChangeText={text => this.setState({ password: text })}
            placeholder="请输入登录密码"
            password={true}
            secureTextEntry={true}
            value={this.state.password}
          />
        </View>
        <TouchableOpacity
          onPress={this.login}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtontext}>登录</Text>
        </TouchableOpacity>
        <View style={styles.otherLogin}>
          <Text>忘记密码?</Text>
          <Text>短信验证码登录</Text>
        </View>
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
  more: {
    width: "100%"
  },
  moreText: {
    lineHeight: 30,
    textAlign: "right"
  },
  welcomeImage: {
    height: 124,
    width: 91,
    marginTop: 20,
    marginBottom: 25
  },
  formItem: {
    width: "100%",
    height: 42,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "rgb(241, 241, 241)",
    marginBottom: 15
  },
  formItemLabel: {
    width: 42,
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
  },
  otherLogin: {
    flex: 1,
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  otherLoginText: {
    color: "#d00"
  }
});
