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
    title: "主页"
  };

  state = {
    number1: "",
    number2: "",
    number3: "",
    number4: ""
  };

  onPressLearnMore = () => {};

  getMessageCode = () => {
    console.log("getMessageCode.");
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.headerTitle}>主页</Text>
        </View>
        <View style={styles.headerInfo}>
          <Text>我们已向</Text>
          <Text>{this.props.navigation.getParam("phoneNumber")}</Text>
          <Text>发送验证码短信，请查看短信并输入验证码</Text>
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
  headerTitle: {
    textAlign: "center",
    fontSize: 27,
    fontWeight: "600",
    marginBottom: 40
  },
  headerInfo: {
    width: "100%",
    marginLeft: 50,
    marginRight: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 50
  },
  formItem: {
    width: "80%",
    height: 42,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 45
  },
  formItemInput: {
    height: 42,
    width: 50,
    borderBottomWidth: 1,
    textAlign: "center",
    borderBottomColor: "rgb(241, 241, 241)"
  }
});
