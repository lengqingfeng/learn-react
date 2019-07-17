import React, { Component } from "react";
import { View, Text } from "react-native";
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "FastUIKit"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>home</Text>
      </View>
    );
  }
}
